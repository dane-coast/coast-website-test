import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromHTML, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import { stateToHTML } from 'draft-js-export-html'

const { REACT_APP_BACKEND_LINK } = process.env

class AddNewsBlog extends Component {
  constructor(props) {
    super(props);
    this.titleEl = React.createRef();
    this.summaryEl = React.createRef();
    this.linkTitleEl = React.createRef();
    this.linkEl = React.createRef();
    this.dateEl = React.createRef();
    this.imageSourceEl = React.createRef();
    this.imageAltEl = React.createRef();

    this.state = {
      editorState: EditorState.createEmpty(),  // this will create an empty text box
      // editorState: EditorState.createWithContent(content) // this will create a text box that one can edit from.

      // contentEl: React.createRef()
    };
  }

  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
      editorContentHtml: stateToHTML(editorState.getCurrentContent())
    });
  };

  submitHandler = (event) => {
    event.preventDefault()
    const title = this.titleEl.current.value;
    const summary = this.summaryEl.current.value;
    const linkTitle = this.linkTitleEl.current.value;
    const alink = this.linkEl.current.value;
    const adate = this.dateEl.current.value;
    const content = this.state.editorContentHtml;
    const imageSource = this.imageSourceEl.current.value;
    const imageAlt = this.imageAltEl.current.value;
    let cleanContent = content.replace(/(\r\n|\n|\r)/gm, "");
    let allStuff = {
      title: title,
      summary: summary,
      linkTitle: linkTitle,
      alink: alink,
      adate: adate,
      content: cleanContent,
      imageSource: imageSource,
      imageAlt: imageAlt

    }
    console.log(allStuff)
    console.log(allStuff.content)
    let requestBody = {
      query: `
      mutation {
        createNewsBlog(newsInput: {
          title: "${title}",
          link:"${alink}",
          linkTitle: "${linkTitle}",
          content: "${cleanContent}",
          summary: "${summary}",
          date:"${adate}",
          imageSource: "${imageSource}",
          imageAlt: "${imageAlt}"
        }) {
          _id
          title
        }
      }
      `
    }
    // use fetch to send data -> could also use axios or other
    // change this back to heroku  
    //fetch('https://mighty-coast-19334.herokuapp.com/graphql',
    fetch(REACT_APP_BACKEND_LINK, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 21) {
          throw new Error('Failed')
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        // if(this.state.isLogin) { ....or ->
      })
      .catch(err => {
        console.log(err)
      })
  }

  // saveNews = () => {
  //   let content = this.state.editorContentHtml
  //   console.log(content)



  // console.log('rawContentState')
  // console.log(rawContentState)
  // console.log('arawContentState')
  // console.log(arawContentState)



  render() {
    const { editorState } = this.state;
    return (
      <div>
        <div className='editor' style={{
          border: "2px solid black", margin: "7px"
        }}>
          <form className="auth-form" onSubmit={this.submitHandler}>
            <div className="form-control">
              <input type="text" id="newsTitle" ref={this.titleEl} placeholder="Title"></input>
            </div>
            <div className="form-control">
              <input type="text" id="newsSummary" ref={this.summaryEl} placeholder="Summary"></input>
            </div>
            <div className="form-control">
              <input type="text" id="newslinkTitle" ref={this.linkTitleEl} placeholder="Link Title"></input>
            </div>
            <div className="form-control">
              <input type="text" id="newslink" ref={this.linkEl} placeholder="link url"></input>
            </div>
            <div className="form-control">
              <input type="datetime-local" id="newsdate" ref={this.dateEl} placeholder="Date"></input>
            </div>
            <div className="form-control">
              <input type="text" id="imageSource" ref={this.imageSourceEl} placeholder="image Source"></input>
            </div>
            <div className="form-control">
              <input type="text" id="imageAlt" ref={this.imageAltEl} placeholder="image alt"></input>
            </div>
            {/* <div className="form-control">
              <input type="text" id="newscontent" ref={this.contentEl} placeholder="content"></input>
            </div> */}
            <Editor
              editorState={editorState}
              onEditorStateChange={this.onEditorStateChange}
              placeholder="Enter article Content Here..."
              toolbar={{
                options: ['inline', 'fontFamily', 'fontSize', 'colorPicker', 'list', 'textAlign', 'emoji', 'link', 'history'],
                inline: { inDropdown: true },
                fontFamily: { inDropdown: true },
                fontSize: { inDropdown: true },
                colorPicker: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                emoji: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                // image: false
                // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
              }}
            />
            <div className="form-actions">
              <button type="submit">Submit</button>
            </div>
          </form>
          {/* <div className='fake-button' onClick={this.saveNews}> Save</div> */}
        </div>
      </div>
    )
  }
}
export default AddNewsBlog;
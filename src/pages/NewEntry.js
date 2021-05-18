import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromHTML, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html';

import './NewEntry.css'

function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}


// use below to edit existing html from database.
let html = `
 <p>More tests means more work for the laboratories that process them. In Mobile, Coast Diagnostics processes coronavirus tests for about 35 South Mississippi clinics. Even with a 24-7 operation, they remain at their capacity.</p>
            <p>“There’s a demand right now that is higher than the supply,” said Coast Diagnostics CEO Brian Ward.</p>
            <p>Coast Diagnostics in Mobile processes between 2,500 and 3,500 COVID swab tests a day from clinics in four states. They have expanded their facility and hired 55 new people in the last two months, but the demand doesn’t decrease. It brings into question whether there should be better controls on who gets tested and when.</p>
`
const blocksFromHTML = convertFromHTML(html)
const content = ContentState.createFromBlockArray(
  blocksFromHTML.contentBlocks,
  blocksFromHTML.entityMap,
);
// end use for editing html

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // editorState: EditorState.createEmpty(),  // this will create an empty text box
      editorState: EditorState.createWithContent(content) // this will create a text box that one can edit from.
    };
  }

  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
      editorContentHtml: stateToHTML(editorState.getCurrentContent())
    });
  };
  convertToHtml = () => {
    let content = this.state.editorContentHtml
    console.log(content)


    // console.log('rawContentState')
    // console.log(rawContentState)
    // console.log('arawContentState')
    // console.log(arawContentState)


  }

  render() {
    const { editorState } = this.state;
    return <div className='editor' style={{
      border: "2px solid black", margin: "7px"
    }}>
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
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
      <div className='fake-button' onClick={this.convertToHtml}> Save</div>
    </div>
  }
}


export default NewEntry;

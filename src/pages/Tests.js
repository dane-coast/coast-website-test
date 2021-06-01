import React, { Component } from 'react';

import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import AuthContext from '../context/auth-context';

import Spinner from '../components/Spinner/Spinner';

const { REACT_APP_BACKEND_LINK } = process.env
import './Tests.css'

class TestsPage extends Component {
  state = {
    searching: false,
    tests: [],
    isLoading: false,
    showModal: false
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.descriptionElRef = React.createRef();

    this.searchThisElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchTests();
  }

  startSearchTestHandler = () => {
    this.setState({ searching: true });
    this.setState({ showModal: true });
    const searchThis = this.searchThisElRef.current.value;
    this.modalCancelHandler(searchThis)
  }

  modalConfirmHandler = (searchThis) => {
    this.setState({ searching: false })


    // const token = this.context.token;
    const requestBody = {
      query: `
            query {
                    searchTests(filter: {description: {contains: ${searchThis}}
                    })
                {
                    title
                    description
                    AKA
                    CPT
                }
            }
            `
    };
    fetch('https://mighty-coast-19334.herokuapp.com/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
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
        this.fetchTests();
      })
      .catch(err => {
        console.log(err)
      })

  }

  modalCancelHandler = () => {
    // this.setState({searching: false})
  }

  fetchTests() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
                query {
                    tests {
                        _id
                        title
                        description
                        CPT
                        AKA
                    }
                }
            `
    };

    // use fetch to send data -> could also use axios or other
    fetch('https://mighty-coast-19334.herokuapp.com/graphql', {
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
        const tests = resData.data.tests
        this.setState({ tests: tests, isLoading: false });
      })
      .catch(err => {
        console.log(err)
        this.setState({ isLoading: false });
      })

  }

  render() {
    let modalStyles
    if (this.state.showModal) {
      modalStyles = 'modal show'
    } else {
      modalStyles = 'modal'
    }

    return (
      <React.Fragment>
        {this.state.showModal && <Backdrop />}
        {/* {this.state.showModal && <Modal title="Tests Found" onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
                    <TestList 
                        tests={this.state.tests}
                        // authUserId={this.context.userId}
                    />
                </Modal>} */}
        <div className="events-control">
          {/* <Modal title="Tests Found" classes={modalStyles} tests={this.state.tests} /> */}
          <form>
            <div className="form-control">
              <input type="text" id="searchThis" ref={this.searchThisElRef} placeholder="Search"></input>
            </div>
          </form>
          <button className="btn" onClick={this.startSearchTestHandler}>Search For Test</button>
        </div>
        {this.state.isLoading ? (
          <Spinner />
        ) : <div></div>}
      </React.Fragment>
    );
  }
}

export default TestsPage;

import React, { useState } from 'react';

import './ModalTestSearch.css';

const ModalTestSearch = (props) => {
    const [enteredText, setEnteredText] = useState('');
    const testSearchHandler = e => {
        // e.preventDefault();
        setEnteredText(e.target.value);
        props.change(e.target.value);
    }
     
    return(
        <div className="modal-tests-search">
            <header className="modal__header">{props.title}</header>
            <section className="modal__content">
            <div className="events-control">
            {/* <Modal title="Tests Found" classes={modalStyles} tests={this.state.tests} /> */}
                <form onSubmit={props.submitHandler}>
                    <div className="form-control">
                        <input type="text" id="searchThis" value={enteredText} onChange={testSearchHandler} placeholder="Search"></input>
                    </div>
                    <button type="submit" className="btn" >Search For Test</button>
                </form>
            </div>
            </section>
        
    </div>
    );
};

export default ModalTestSearch;
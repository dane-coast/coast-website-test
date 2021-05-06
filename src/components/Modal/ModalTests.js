import React from 'react';
import TestList from '../Tests/TestList/TestList';
import Spinner from '../Spinner/Spinner';

import './ModalTests.css';

const ModalTests = (props) => {

    console.log(props)
    let tempYOffset = (window.pageYOffset - 400) + "px"
    const styles = { top: tempYOffset}

    return (
    <div className="modal-tests" style={styles}>

        <header className="modal__header">{props.title}</header>
        <section className="modal__content"></section>
        {props.loading && <Spinner />}
            {/* <Spinner /> */}
            {/* pass the content in dynmically -> props.children -> slot react solution, can pass anything between our modaljs tags and that will be rendered*/}
            {props.children}
            {props.tests  ? (
                <TestList tests={props.tests} />) : (
                <TestList tests={["Not Found"]} /> )
            }
        <section className="modal__actions">
            <button className="btn" onClick={props.onCancel}>Cancel</button>
        </section>
    </div>

)
}

export default ModalTests;
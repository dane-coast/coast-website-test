import React from 'react';
import TestList from '../Tests/TestList/TestList';
import Spinner from '../Spinner/Spinner';

import './ModalTests.css';

const ModalTests = (props) => {

    console.log(props)
    let h = window.innerHeight
    console.log(h)
    let offsetFactor;
    if (h >= 1200){
        offsetFactor = .33
    }
    else if (h >= 800) {
        offsetFactor = 0.50
    }
    else if (h >= 600) {
        offsetFactor = 0.6
    } else if (h >= 481) {
        offsetFactor = 0.66
    } else {
        offsetFactor = 0.8
    }
    console.log(offsetFactor)
    let offset = h * offsetFactor
    let tempYOffset = (window.pageYOffset - offset) + "px"
    const styles = { top: tempYOffset}

    return (
    <div className="modal-tests" style={styles}>

        <header className="modal__header">{props.title}</header>
        <section className="modal__content"></section>
        {props.loading && <Spinner />}
            {/* <Spinner /> */}
            {/* pass the content in dynmically -> props.children -> slot react solution, can pass anything between our modaljs tags and that will be rendered*/}
            {props.children}
            {console.log(props)}
            {props.tests  ? (
                <TestList tests={props.tests} />) : (
                "Tests not found")
            }
        <section className="modal__actions">
            <button className="btn" onClick={props.onCancel}>Cancel</button>
        </section>
    </div>

)
}

export default ModalTests;
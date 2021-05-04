import React from 'react';
import TestList from '../Tests/TestList/TestList';


import './ModalTests.css';

const modalTests = (props) => (
    <div className="modal-tests">
        <header className="modal__header">{props.title}</header>
        <section className="modal__content"></section>
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

export default modalTests;
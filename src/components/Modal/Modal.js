import React from 'react';
import TestList from '../Tests/TestList/TestList'
import './Modal.css';

const modal = props => (
    <div className={props.classes}>
        <header className="modal__header"><h1>{props.title}</h1></header>
        <section className="modal__content">
            {props.children}
            {console.log({props})}
            {props.tests  ? (
            <TestList tests={props.tests} />) : (
            <TestList tests={["Not Found"]} /> )}
            test


        </section>
        <section className="modal__actions">
            <button className="btn" onClick={props.onCancel}>Close</button>
        </section>
    </div>
);

export default modal;




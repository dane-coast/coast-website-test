import React from 'react';
import TestList from '../Tests/TestList/TestList'
import './Modal.css';
import TestDetails from '../Tests/TestList/TestItem/TestDetails';

const modal = props => (
    <div className={props.classes}>
        <header className="modal__header"><h1>{props.test.title}</h1></header>
        <section className="modal__content">
            {props.children}
            {console.log({props})}
            <TestDetails test={props.test} />
        </section>
        <section className="modal__actions">
            <button className="btn" onClick={props.onCancel}>Close</button>
        </section>
    </div>
);

export default modal;




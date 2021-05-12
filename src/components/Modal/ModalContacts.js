import React from 'react';
import { Markup } from 'interweave';
import './ModalContacts.css';
// import TestDetails from '../Tests/TestList/TestItem/TestDetails';
import Spinner from '../Spinner/Spinner'
import { localDateTime } from '../../util/localDateTime';

    const modalContacts = props => {
        let tempYOffset = (window.pageYOffset + 50) + "px"
        const styles = { top: tempYOffset}

    const convertDate = (ts) => {
            let date = localDateTime(ts)
            return date.shortDTString
        }

  return (
    <div className="modal-tests" style={styles}>

        <header className="modal__header">{props.title} test</header>
        <section className="modal__content"></section>
        {props.loading && <Spinner />}

        {props.contacts.map(contact=> {
                            return(
                                <div key={contact.id}>
                                    <div className="blog">
                                        <h3 className="post-title">{contact.name}</h3>
                                            <span className="date">{convertDate(contact.createdAt)}</span><br />
                                        <div className="blog-main">
                                            <div className="post-summary">
                                            <div> {contact.message}</div>
                                            </div>
                                        </div>                                                                                           
                                    </div>
                                </div>
                                )
                            })}
            {/* <Spinner /> */}
            {/* pass the content in dynmically -> props.children -> slot react solution, can pass anything between our modaljs tags and that will be rendered*/}
            {props.children}
            {/* {props.tests  ? (
                <TestList tests={props.tests} />) : (
                <TestList tests={["Not Found"]} /> )
            } */}
        <section className="modal__actions">
            <button className="btn" onClick={props.onNext}>Next</button>
        </section>
    </div>

)}
export default modalContacts;

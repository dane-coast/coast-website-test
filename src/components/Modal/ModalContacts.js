import React from 'react';
import { Markup } from 'interweave';
import './ModalContacts.css';
// import TestDetails from '../Tests/TestList/TestItem/TestDetails';
import Spinner from '../Spinner/Spinner'


const modalContacts = props => {
    let tempYOffset = (window.pageYOffset + 200) + "px"
    const styles = { top: tempYOffset}
  return (
    <div className="modal-tests" style={styles}>

        <header className="modal__header">{props.title} test</header>
        <section className="modal__content"></section>
        {props.loading && <Spinner />}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae esse excepturi animi eligendi repellat cum laudantium laboriosam officiis tempora dolore eveniet debitis velit sunt, aspernatur commodi natus. Consectetur animi mollitia pariatur neque saepe omnis ipsam, maxime harum ducimus aliquid sed autem deleniti facere quidem distinctio ab ex necessitatibus vel.
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

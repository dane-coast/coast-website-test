import React from 'react';
import { Markup } from 'interweave';
import './ModalArticle.css';
// import TestDetails from '../Tests/TestList/TestItem/TestDetails';
import Spinner from '../Spinner/Spinner'

const modal = props => {
    let tempYOffset = (window.pageYOffset - 200) + "px"
    const styles = { top: tempYOffset}

    return (
    <div className={props.classes} style={styles}>
        <header className="modal__header"><h1>{props.article.title}</h1></header>
        <section className="modal__content">
            <div className='date'>{props.article.date}</div>
            {props.article.link &&
            <div>
                <a href={props.article.link}>{props.article.linkTitle}</a>
            </div>
            }
            <div className="main_article">
                <Markup content={props.article.content} />
            </div>
            {props.article.image && 
            <div>
                <img src={process.env.PUBLIC_URL + props.article.image.src} alt={props.article.image.alt} />
            </div>}
        {props.loading && <Spinner />}
            {props.children}
            {console.log({props})}
            {/* <TestDetails test={props.test} /> */}
        </section>
        {/* <section className="modal__actions">
            <button className="btn" onClick={props.onCancel}>Close</button>
        </section> */}
    </div>
)};

export default modal;




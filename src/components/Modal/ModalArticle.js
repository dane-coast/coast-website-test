import React from 'react';
import { Markup } from 'interweave';
import './ModalArticle.css';
// import TestDetails from '../Tests/TestList/TestItem/TestDetails';
import Spinner from '../Spinner/Spinner'
import { localDateTime } from '../../util/localDateTime';
// import { Markup } from 'interweave';


const convertDate = (ts) => {
    let date = localDateTime(ts)
    let newdate = date.dateString
    return newdate
}

const modal = props => {


    // if window.pageYoffse

    let h = window.innerHeight
    // console.log(h)
    let offsetFactor;
    if (h >= 1200) {
        offsetFactor = .15
    }
    else if (h >= 800) {
        offsetFactor = 0.30
    }
    else if (h >= 600) {
        offsetFactor = 0.4
    } else if (h >= 481) {
        offsetFactor = 0.5
    } else {
        offsetFactor = 0.8
    }
    // console.log(offsetFactor)
    let offset = h * offsetFactor
    let tempYOffset = (window.pageYOffset - offset) + "px"
    const styles = { top: tempYOffset }


    // let tempYOffset = (window.pageYOffset - 350) + "px"
    // console.log(window.pageYOffset)
    // const styles = { top: tempYOffset }

    return (
        <div className={props.classes} style={styles}>

            <header className="modal__header"><h1>{props.article.title}</h1></header>
            <section className="modal__content">
                <div className='date'>{convertDate(props.article.date)}</div>
                {props.article.link &&
                    <div>
                        <a href={props.article.link}>{props.article.linkTitle}</a>
                    </div>
                }
                <div className="main_article">
                    <Markup content={props.article.content} />
                </div>
                {props.article.imageSource &&
                    <div>
                        <img src={process.env.PUBLIC_URL + props.article.imageSource} alt={props.article.imageAlt} />
                    </div>}
                {props.loading && <Spinner />}
                {props.children}
                {console.log({ props })}
                {/* <TestDetails test={props.test} /> */}
            </section>
            {/* <section className="modal__actions">
                <button className="btn" onClick={props.onCancel}>Close</button>
            </section> */}

        </div>
    )
};

export default modal;




import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';

import ModalArticle from '../components/Modal/ModalArticle';
import Backdrop from '../components/Backdrop/Backdrop';
import { Markup } from 'interweave';
import { localDateTime } from '../util/localDateTime';
import './News.css';


const newsArticles = [
    {
        id: "na1",
        title: "Coast Diagnostics in the News: COVID Antibody Testing",
        date: "January 5th, 2021",
        link: "https://www.fox10tv.com/news/mobile_county/antibody-testing-now-available-in-mobile-at-coast-diagnostics/article_bce4be8e-4f93-11eb-9449-6f043602c556.html",
        linkTitle: "Fox10 News Reporting:",
        content: `MOBILE, Ala. --COVID Antibody Testing is now available at Coast Diagnostics at 4674 Airport Boulevard, Suite C in Mobile, Alabama.</p>
        <p>The lab is open 8:00 AM to 5:00 PM Monday through Friday.</p>
        <p>For the month of January, Coast Diagnostics is offering a limited cash price of $75 per Antibody test.</p>
        <p>Appointments can be made by calling <a href="tel:251-459-8405">251-459-8405</a>. </p>
        <p>Coast offers an extended test menu of both routine and cutting edge testing, using advanced technology for producing research and delivering results.</p>
        <p>Specialties include COVID-19 testing, Hematology, Coagulation, Chemistry, Urinalysis, Microbiology, Pathology, and Next Generation Sequencing.</p>
        `,
        summary: `
            <p>COVID Antibody Testing is now available at Coast Diagnostics at 4674 Airport Boulevard, Suite C in Mobile, Alabama. Call <a href="tel:251-459-8405">251-459-8405</a>.<br /></p>
            `
    },
    {
        id: "na2",
        title: "Labs Under Strain Of Large Covid Test Load",
        date: "July 15th, 2020",
        summary: `
            <p>More tests means more work for the laboratories that process them. In Mobile, Coast Diagnostics processes coronavirus tests for about 35 South Mississippi clinics. Even with a 24-7 operation, they remain at their capacity.</p>
            <p>“There’s a demand right now that is higher than the supply,” said Coast Diagnostics CEO Brian Ward.</p>
            <p>Coast Diagnostics in Mobile processes between 2,500 and 3,500 COVID swab tests a day from clinics in four states. They have expanded their facility and hired 55 new people in the last two months, but the demand doesn’t decrease. It brings into question whether there should be better controls on who gets tested and when.</p>
        `,
        content: `
            <p>More tests means more work for the laboratories that process them. In Mobile, Coast Diagnostics processes coronavirus tests for about 35 South Mississippi clinics. Even with a 24-7 operation, they remain at their capacity.</p>
            <p>“There’s a demand right now that is higher than the supply,” said Coast Diagnostics CEO Brian Ward.</p>
            <p>Coast Diagnostics in Mobile processes between 2,500 and 3,500 COVID swab tests a day from clinics in four states. They have expanded their facility and hired 55 new people in the last two months, but the demand doesn’t decrease. It brings into question whether there should be better controls on who gets tested and when.</p>
            <p>“The asymptomatic population is the one that has really overloaded the system and caused some delays across the country in testing because they don’t show symptoms, but they’ve been exposed to it,” Ward said. “You don’t really want to test those if you don’t have to, but then you get the test inside and you find out they’re positive. That’s a big deal.” That paradox is causing much debate across the country about who to test and when.</p>
            <p>At the same time, the positivity rate of tests at the lab has grown from around 10 percent to 20 percent, meaning many of those asymptomatic people are positive. But others may be getting tested too early in the virus’ incubation cycle.</p>
            <p>“You’re looking at really a 14-day period from being exposed to someone and that positive can show up at any time,” Ward said. “It varies by people, which from a testing standpoint makes this disease so hard to get your hand around because you can be a positive any time during that 14-day period.”</p>
            <p>That hit and miss aspect of the testing is likely causing the virus to spread.</p>
            <p>Ward described a typical situation they encounter.</p>
            <p>“Someone’s been exposed, they come in and get tested within three or four days of that exposure wherever they went along the Coast, and then they get a negative and they think they’re good, and then they go out and they don’t realize that day 11 they start to run a fever and the amount of people they have exposed in that time is a huge deal.”</p>
            <p>For that reason, Ward said it is important to self-quarantine for a full 14 days after exposure, even if you have received a negative test.</p>
            <p>The demand for COVID tests is also putting a strain on clinics providing the tests.</p>
            <p>“We’ve just got to do a better job of communicating to patients to have patience and let physicians do what they do, let us run as many tests as we can run and max the system,” he said. “But we will get the results back to you in a timely fashion of what the machines allow us to do.”</p>
            <p>In other words, Ward said, don’t call the clinic for test results, wait for the clinic to call you.</p>
        `,
        imageSource: '/images/wlox-thumbnail.jpg',
        imageAlt: "WLOX Mobile, AL - July 15, 2020",

    },
    {
        id: "na3",
        title: "COVID-19 Testing Now Available From Coast Diagnostics",
        date: "June 23rd, 2020",
        summary: `
            <p>Coast Diagnostics is now offering lab testing for COVID-19 and COVID-19 anti-bodies. In this difficult time for public health as well as the health of individual patients, Coast Diagnostics is proud to bring its industry-leading standards of quality, accuracy, and timeliness to the COVID-19 testing sphere.<br /><br />Please contact us today about your COVID-19 testing needs.<br /></p>
        `,
        content: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of...
        `,
        imageSource: '/images/testingInAction.jpg',
        imageAlt: "Testing In Action"

    }
]

const convertDate = (ts) => {
    let date = localDateTime(ts)
    let newdate = date.dateString
    return newdate
}


class NewsPage extends Component {

    constructor(props) {
        super(props);
        this.titleElRef = React.createRef();

        this.searchThisElRef = React.createRef();
        this.state = {
            searching: false,
            isLoading: true,
            articleModal: false,
            target: '',
            mounted: false
        };

    }


    fetchNews() {
        this.setState({ isLoading: true });
        const requestBody = {
            query: `            
                query {
                    newsBlogs{
                    _id
                    title
                    link
                    linkTitle
                    content
                    summary
                    date
                    }
                }
            `
        };

        // use fetch to send data -> could also use axios or other
        // fetch('http://localhost:8000/graphql',
        // change this to heroku 
        //fetch('https://mighty-coast-19334.herokuapp.com/graphql
        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 21) {
                    throw new Error('Failed')
                }
                return res.json();
            })
            .then(resData => {
                // console.log(resData);
                const newsBlogs = resData.data.newsBlogs
                this.setState({ newsBlogs: newsBlogs, isLoading: false });
            })
            .catch(err => {
                console.log(err)
                this.setState({ isLoading: false });
            })

    }
    componentDidMount() {
        this.fetchNews()
        this.setState({ mounted: true })
    }


    showMoreHandler = (event) => {
        this.setState({ searching: true });
        // this.setState({ articleModal: true });
        // console.log(event)
        // console.log(event.target.attributes)

        let findthis = event.target.attributes['data-id']['value']
        // console.log('findthis')
        // console.log(findthis)
        const requestBody = {
            query: `
                query{
                    newsBlog(id: "${findthis}") {
                        _id
                        title
                        summary
                        link
                        linkTitle
                        date
                        content
                        imageSource
                        imageAlt
                    }

                }
            `
        }
        // const found = newsArticles.find(article => article.id == findthis);
        // change this to heroku 
        // fetch('https://mighty-coast-19334.herokuapp.com/graphql'
        console.log(requestBody)
        try {
            fetch('http://localhost:8000/graphql', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    if (res.status !== 200 && res.status !== 21) {
                        throw new Error('Failed')
                    }
                    return res.json();
                })
                .then(resData => {
                    console.log('resData')
                    console.log(resData);
                    const newsBlog = resData.data.newsBlog
                    this.setState({ newsBlog: newsBlog, isLoading: false, articleModal: true })
                    console.log(this.state.newsBlog)
                    // this.fetchTests();
                })

        } catch (err) {
            throw err
        }
    }

    // this.setState({ target: found })

    backdropClickHandler = () => {
        // can add more functionality here
        this.setState({ searching: false });
        this.setState({ articleModal: false });
        // this.setState({searchThis: ''});
    };

    modalCancelHandler = () => {
        this.setState({ searching: false });
        this.setState({ articleModal: false });
    }
    findArticle = (e) => {

    }


    render() {
        return (
            <React.Fragment>
                <Hero currentPage={this.props.location} />
                {this.state.searching && <Backdrop click={this.backdropClickHandler} />}
                {this.state.searchModal && <Backdrop click={this.backdropClickHandler} />}

                <main role="main">

                    <div className="triangle" id="aboutTriangle1">
                        <h2 className="triangle tight">News &amp; Articles</h2>
                    </div>
                    <section id="news">
                        {!this.state.isLoading &&
                            <div className="container">
                                {this.state.articleModal && <ModalArticle title={this.state.newsBlog.title} onCancel={this.modalCancelHandler} article={this.state.newsBlog} classes="modal show">
                                </ModalArticle>}
                                {this.state.newsBlogs.map(blog => {
                                    return (
                                        <article key={blog._id}>
                                            {/* {console.log(blog._id)} */}
                                            <div className="blog">
                                                <h3 className="post-title">{blog.title}</h3>
                                                <span className="date">{convertDate(blog.date)}</span><br />
                                                <div className="blog-main">
                                                    <div className="post-summary">
                                                        <Markup content={blog.summary} />
                                                    </div>
                                                </div>
                                                <div className='sub-flex'>
                                                    <div className="half-spacer"></div>
                                                    <a className="button readmore" onClick={this.showMoreHandler} data-id={blog._id} title="Read More...">Read More...</a>

                                                    {blog.imageSource &&
                                                        <React.Fragment>
                                                            <img src={process.env.PUBLIC_URL + blog.imageSource} alt={blog.imageAlt} />
                                                            <div className="spacer"></div>
                                                        </React.Fragment>}
                                                </div>
                                            </div>
                                        </article>
                                    )
                                })}
                                {/* <article>
                                <div className="blog">
                                    <h3 className="post-title">Coast Diagnostics in the News: COVID Antibody Testing</h3>
                                    <span className="date">January 5th, 2021</span><br />
                                        <div className="blog-main">
                                            <div className="post-summary">
                                                <p>COVID Antibody Testing is now available at Coast Diagnostics at 4674 Airport Boulevard, Suite C in Mobile, Alabama. Call <a href="tel:251-459-8405">251-459-8405</a>.<br /></p>
                                            </div>                                     
                                            <div className="break"><p><br /></p></div>
                                            <div className="half-spacer"></div>
                                            <a className="button readmore" onClick={this.showMoreHandler} data-id={newsArticles[0].id} title="Read More...">Read More...</a>

                                            
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="blog">             
                                    <h3 className="post-title">Labs Under Strain Of Large Covid Test Load</h3>
                                    <span className="date" >July 15th, 2020</span><br />
                                    <div className="blog-main">
                                        <div className="post-summary">
                                            <p>More tests means more work for the laboratories that process them. In Mobile, Coast Diagnostics processes coronavirus tests for about 35 South Mississippi clinics. Even with a 24-7 operation, they remain at their capacity.</p>
                                            <p>“There’s a demand right now that is higher than the supply,” said Coast Diagnostics CEO Brian Ward.</p>
                                            <p>Coast Diagnostics in Mobile processes between 2,500 and 3,500 COVID swab tests a day from clinics in four states. They have expanded their facility and hired 55 new people in the last two months, but the demand doesn’t decrease. It brings into question whether there should be better controls on who gets tested and when.<br /></p>
                                        </div>
                                        <div className='blog-extra'></div>
                                        <div className="break"><p><br /></p></div>
                                            <div className="half-spacer"></div>
                                        <a className="button readmore" href="./news/under-strain.html" title="Read More..." linkId='na2' >Read More...</a>
                                   
                                        <img src={wlox}alt="WLOX Mobile, AL - July 15, 2020" className="newsFeatureImg" />
                                        <div className="spacer"></div>
                                    
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="blog">
                                        <h3 className="post-title">COVID-19 Testing Now Available From Coast Diagnostics</h3>
                                        <span className="date">June 23rd, 2020</span><br />
                                    <div className="blog-main">
                                        <div className="post-summary">
                                            <p>Coast Diagnostics is now offering lab testing for COVID-19 and COVID-19 anti-bodies. In this difficult time for public health as well as the health of individual patients, Coast Diagnostics is proud to bring its industry-leading standards of quality, accuracy, and timeliness to the COVID-19 testing sphere.<br /><br />Please contact us today about your COVID-19 testing needs.<br /></p>
                                        </div>
                                        <div className='blog-extra'></div>
                                        <div className="break"><p><br /></p></div>
                                            <div className="half-spacer"></div>
                                        <a className="button readmore" href="https://coastdiagnostics.com/news/covid-19-testing-now-available-from-coast-diagnostics" title="Read More..." linkId='na3'>Read More... <br /></a>
                                        <br />
                                        <img src={testingInAction}alt="Testing In Action" style={{float:"right"}} className="newsFeatureImg" />
                                        <div className="spacer"></div>
                                
                             
                                    </div>
                                </div>
                            </article> */}
                            </div>}
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default NewsPage;
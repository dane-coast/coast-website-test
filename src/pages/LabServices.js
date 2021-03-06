import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';

// import TestsPage from './Tests'
import ModalTests from '../components/Modal/ModalTests';
import Backdrop from '../components/Backdrop/Backdrop';
import './LabServices.css'
import coag from "../assets/coagulation.jpg";
import chem from "../assets/chemistry.jpg";
import drugScreen from '../assets/urinalysis-drugscreening.jpg';
import ModalTestSearch from '../components/Modal/ModalTestSearch';

const { REACT_APP_BACKEND_LINK } = process.env

class LabServicesPage extends Component {


  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();

    this.searchThisElRef = React.createRef();
    this.state = {
      searching: false,
      tests: [],
      isLoading: false,
      searchModal: false,
      searchThis: '',
      target: '',
      searched: ''
    };

  }
  updateSearchThis = (something) => {
    this.setState({ searchThis: something })
  }
  startModalTestSearchHandler = (e) => {
    // e.preventDefault();
    // this.setState({searching: true});
    console.log(e)
    this.setState({ searchModal: true });
    console.log(e.target.innerText)
    this.setState({ target: `Search for ${e.target.innerText} Tests` })
    // this.setState({isLoading: true});
  }
  onSearchEntryHandler = (e) => {
    this.setState({ searchThis: e.target.value })
    // console.log(this.state.searchThis)
  }
  startSearchingTestHandler = (e) => {
    e.preventDefault();
    // console.log(e)
    if (this.state.searchThis === "") {
      console.log('no')
      return
    }
    // this.setState({ searching: true });
    // this.setState({ isLoading: true });
    this.setState({
      searching: true,
      isLoading: true,
      searched: this.state.searchThis,
      tests: []
    })
    const searchFor = this.state.searchThis

    if (searchFor.trim().length === 0) {
      return
    }
    // console.log(searchFor)
    const requestBody = {
      query: `
            query {
                searchTests(filter: {test: {contains: "${searchFor}"}
              })
            {
              _id
              title
              description
              AKA
              CPT
            }
            }
                `
    };
    fetch(REACT_APP_BACKEND_LINK, {
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
        const tests = resData.data.searchTests
        this.setState({ tests: tests, isLoading: false, target: '', searchThis: '' })
        // this.fetchTests();
      })
      .catch(err => {
        console.log(err)
      })

  }

  // this function will find all tests.
  fetchTests() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
                query {
                    tests {
                        _id
                        title
                        description
                        CPT
                        AKA
                    }
                }
            `
    };

    // use fetch to send data -> could also use axios or other
    fetch(REACT_APP_BACKEND_LINK, {
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
        console.log(resData);
        const tests = resData.data.tests
        this.setState({ tests: tests, isLoading: false });
      })
      .catch(err => {
        console.log(err)
        this.setState({ isLoading: false });
      })

  }


  testModalCancelHandler = () => {
    this.setState({ searching: false })
  }

  backdropClickHandler = () => {
    // can add more functionality here
    // this.setState({ searching: false });
    // this.setState({ searchModal: false });
    // this.setState({ searchThis: '' });
    this.setState({
      searching: false,
      searchModal: false,
      searchThis: '',
      tests: [],
    })
  };


  // console.log(this.state.thisPage
  render() {
    return (

      <React.Fragment>
        {this.state.searching && <Backdrop click={this.backdropClickHandler} />}
        {this.state.searchModal && <Backdrop click={this.backdropClickHandler} />}
        <Hero currentPage={this.props.location} />
        <main role="main">
          <div className='inline__test-search'>
            <div className="events-control">
              {/* <Modal title="Tests Found" classes={modalStyles} tests={this.state.tests} /> */}
              <form onSubmit={this.startSearchingTestHandler}>
                <div className="form-control">
                  <input type="search" id="searchThis" value={this.state.searchThis} onChange={this.onSearchEntryHandler} placeholder="Search"></input>
                </div>
                <button type="submit" className="btn" >Search For Test</button>
              </form>
            </div>
          </div>

          {/* <div style={{marginTop:"-2.0rem", display: "block"}}><TestsPage /></div> */}

          <div className="triangle" id="serviceTriangle1">
            <h2 className="triangle">Lab Services</h2>
          </div>
          <section id="labServices">
            <div className="container">
              <div className='center'>
                <div className="modal-container">
                  {console.log(this.state)}
                  {this.state.searching && <ModalTests title={`Search: "${this.state.searched}"`} onCancel={this.testModalCancelHandler} loading={this.state.isLoading} tests={this.state.tests}>
                  </ModalTests>}
                  {!this.state.searching && this.state.searchModal && <ModalTestSearch change={this.updateSearchThis} submitHandler={this.startSearchingTestHandler} title={this.state.searched} />}

                </div>

              </div>
              <div className="lab-service" id="5507" style={{ textAlign: "left" }}>
                <h2 id="covid-19" onClick={this.startModalTestSearchHandler}><span>COVID-19</span></h2>
                {/* remove this */}
                <div className="labPage">
                  <p>Coast Diagnostics is a leader in providing fast, accurate COVID-19 results to practitioners across the Gulf Coast region. We provide one of the best turnaround times in the industry, with results reported in 24-48 hours.
                                    </p>
                  <p>The U.S. Food and Drug Administration (FDA) has said there are three use cases for serological tests: <br />
                  </p>
                  <ul style={{ listStyle: "disc inside" }}>
                    <li>They could one day help support decision making as to whether people can return to work</li>
                    <li>They could determine the people who may qualify for vaccination once it is available</li>
                    <li>They could identify individuals who have recovered to see if they
                    can donate plasma that may be used as a treatment for people with severe
                                    forms of the disease caused by the novel coronavirus</li>
                  </ul>
                  <p><strong><br /></strong></p>
                  <p>
                    <strong>Note:</strong> COVID-19 by RT-PCR is reported as Not Detected
                                        (Negative) or Detected (Positive). Inconclusive results may be reported
                                        if one or more viral marker is not present in the sample. Inconclusive
                                        results are rerun for verification in the laboratory and, if a second
                                        inconclusive result is found, a recollect will be requested from the
                                        provider per EUA.
                                    </p>
                </div>
                <div className="labTestList">
                  <ul>
                    <li><a href="https://coastdiagnostics.com/%7Bentry:5118:url%7D">COVID-19 by RT-PCR</a> (<a href="https://www.thermofisher.com/content/dam/LifeTech/Documents/PDFs/clinical/taqPath-COVID-19-combo-kit-letter-of-authorization.pdf">EUA information</a>)</li>
                    <li><a href="https://coastdiagnostics.com/%7Bentry:5161:url%7D">COVID-19 IgG antibody</a></li>
                  </ul>
                </div>
              </div>
              <div className="lab-service" id="5497" style={{ textAlign: "left" }}>
                <h2 id="hematology" onClick={this.startModalTestSearchHandler}><span>Hematology</span></h2>
                <div className="labPage">
                  <p>
                    Coast Diagnostics provides practitioners with state-of-the-art hematology testing. From Complete Blood Counts to Eosinophil Sedimentation Rates, we assure accurate results on testing run by our highly trained, experienced laboratory professionals
                                    </p>
                </div>
                {/* <div className="labTestList">
                                    <ul>
                                        <li>Complete Blood Count with Differential</li>
                                        <li>Sed Rate</li><li>Reticulocyte Count</li>
                                        <li>Cell Counts (Body Fluids/CSF)</li><
                                            li>Early Sepsis Indicator</li>
                                    </ul>
                                </div> */}
              </div>
              <div className="lab-service" id="5490" style={{ textAlign: "left" }}>
                <div className="lab-page">
                  <div>
                    <h2 id="coagulation" onClick={this.startModalTestSearchHandler}><span>Coagulation</span></h2>
                    <p>Coagulation testing is used to check the function of one or more of your coagulation factors. </p>
                  </div>
                  <img src={coag} s alt="Coagulation" />
                </div>
                {/* <div className="labTestList">
                                    <ul>
                                        <li>Protime</li>
                                        <li>Activated Partial Thromboplastin Time</li>
                                        <li>D Dimer</li>
                                        <li>Fibrinogen</li>
                                        <li>Thrombin Time</li>
                                        <li>Batroxobin Time</li>
                                        <li>Factor Deficiency</li>
                                        <li>Lupus Anticoagulant</li>
                                        <li>Protein C Pathway</li>
                                        <li>Heparin</li>
                                        <li>Antithrombin </li>
                                        <li>Von Wilebrand Factor</li>
                                    </ul>
                                </div> */}
              </div>
              <div className="lab-service" id="5500" style={{ textAlign: "left" }}>
                <div className="lab-page">
                  <div>
                    <h2 id="chemistry" onClick={this.startModalTestSearchHandler}><span>Chemistry</span></h2>
                    <p>
                      Blood chemistry tests or panels are groups of tests that measure many chemicals in a sample of blood. They show how well certain organs are working and can help find abnormalities. There are many types of blood chemistry tests. They measure chemicals including enzymes, electrolytes, fats (lipids), hormones, sugars, proteins, vitamins and minerals. Coast Diagnostics performs many chemistry tests and reports these back to your doctor within a few hours of receiving the samples.
                                        </p>
                  </div>
                  <img src={chem} alt="Chemistry" />
                </div>
                {/* <div className="labTestList">
                                    <ul>
                                        <li>Cortisol (Serum, Plasma, Urine)</li>
                                        <li>Active B12</li>
                                        <li>EPO</li>
                                        <li>Ferritin</li>
                                        <li>Folate</li>
                                        <li>Folate (RBC)</li>
                                        <li>Intrinsic Factor Ab</li>
                                        <li>sTfR</li>
                                        <li>Vitamin B12</li>
                                        <li>25(OH) Vitamin D Total</li>
                                        <li>Intact PTH</li>
                                        <li>Ostase</li>
                                        <li>Ultrasensitive hGH</li>
                                        <li>AccuTnI+3 (Troponin I)</li>
                                        <li>CK-MB</li>
                                        <li>Digoxin</li>
                                        <li>hsTnI*</li>
                                        <li>Myoglobin</li>
                                        <li>Triage BNP</li>
                                        <li>Ultrasensitive Insulin</li>
                                        <li>Rubella IgG</li>
                                        <li>Toxo IgG</li>
                                        <li>Toxo IgM II</li>
                                        <li>AFP (ONTD)</li>
                                        <li>AMH</li>
                                        <li>DHEA-S</li>
                                        <li>hFSH</li>
                                        <li>hLH</li>
                                        <li>Inhibin A</li>
                                        <li>Progesterone</li>
                                        <li>Prolactin</li>
                                        <li>Sensitive Estradiol</li>
                                        <li>SHBG</li>
                                        <li>Testosterone</li>
                                        <li>Total ??hCG (5th IS)</li>
                                        <li>Unconjugated Estriol</li>
                                        <li>T3 (Free and Total)</li>
                                        <li>T4 (Free and Total)</li>
                                        <li>Thyroglobulin</li>
                                        <li>Thyroglobulin Ab II</li>
                                        <li>Thyroid Uptake</li>
                                        <li>TPO Ab</li>
                                        <li>TSH (3rd IS)</li>
                                        <li>AFP</li>
                                        <li>CEA</li>
                                        <li>BR Monitor (CA 15-3 Antigen)</li>
                                        <li>GI Monitor (CA 19-9 Antigen)</li>
                                        <li>OV Monitor (CA 125 Antigen)</li>
                                        <li>Hybritech PSA</li>
                                        <li>Hybritech free PSA</li>
                                        <li>Hybritech p2PSA</li>
                                        <li> Prostate Health Index (phi)</li>
                                        <li>COVID-19 IgG and IgM</li>
                                        <li>ACE</li>
                                        <li>Acetaminophen</li>
                                        <li>Alcohol</li>
                                        <li>Amikacin</li>
                                        <li>Ammonia</li>
                                        <li>BUN</li>
                                        <li>Caffeine</li>
                                        <li>Ceruloplasmin</li>
                                        <li>Cholesterol</li>
                                        <li>CKMB</li>
                                        <li>CO2</li>
                                        <li>CRP</li>
                                        <li>Cyclosporin</li>
                                        <li>Gentian Cystatin C</li>
                                        <li>Direct Bilirubin</li>
                                        <li>Digoxin</li>
                                        <li>Disopyramide</li>
                                        <li>Dilantin</li>
                                        <li>Quinidine</li>
                                        <li>Theophylline</li>
                                        <li>Valproic Acid</li>
                                        <li>Hemoglobin A1c</li>
                                        <li>GGT</li>
                                        <li>Homocysteine</li>
                                        <li>HDL</li>
                                        <li>IgG</li>
                                        <li>IgM</li>
                                        <li>LDL</li>
                                        <li>Lithium</li>
                                        <li>Lipase</li>
                                        <li>Amylase</li>
                                        <li>Phosphorus</li>
                                        <li>Tacrolimus</li>
                                        <li>RF</li>
                                        <li>Salicylic Acid</li>
                                        <li>Serum Protein</li>
                                        <li>Total bilirubin</li>
                                        <li>Theophylline</li>
                                        <li>Tobramycin</li>
                                        <li>Total Protein</li>
                                        <li>Transferrin</li>
                                        <li>Tricyclic Antidepressants</li>
                                        <li>Triglycerides</li>
                                        <li>Urine Albumin</li>
                                        <li>UIBC</li>
                                        <li>VPA</li>
                                        <li>Vancomycin</li>
                                        <li>Glucose</li>
                                        <li>Sodium</li>
                                        <li>Potassium</li>
                                        <li>Chloride</li>
                                    </ul>
                                </div> */}
              </div>
              <div className="lab-service" id="5503" style={{ textAlign: "left" }}>
                <div className="lab-page">
                  <div>
                    <h2 id="urinalysis" onClick={this.startModalTestSearchHandler}><span>Urinalysis / Urine Drug Screen</span></h2>
                    <p>
                      Urinalysis is a test of your urine. It is used to detect and manage a wide range of disorders, such as urinary tract infections, kidney disease and diabetes. An abnormal urinalysis result may point to a disease or illness. Urine Drug Screening is testing for drugs and metabolites in urine to determine if the patient is taking any drugs, legal or illegal.
                                        </p>
                  </div>
                  <img src={drugScreen} alt="Urinalysis / Urine Drug Screen" />
                </div>
                {/* <div className="labTestList">
                                    <ul>
                                        <li>Urinalysis with microscopic exam</li>
                                        <li>Drug testing available on over 70 drugs/metabolites</li>
                                    </ul>
                                </div> */}
              </div>
              <div className="lab-service" id="5512" style={{ textAlign: "left" }}>
                <h2 id="molecular" onClick={this.startModalTestSearchHandler}><span>Microbiology / Molecular</span></h2>
                <div className="labPage">
                  <p>
                    Microbiology tests determine if a person has an infection. Routine microbiology testing takes 1-3 or more days. Molecular testing is performed by RT-PCR at Coast Diagnostics in partnership with Thermo Fisher. These tests are highly sensitive and specific for certain organisms and many panels are available for practitioners to order.
                                    </p>
                </div>
                {/* <div className="labTestList">
                                    <ul>
                                        <li>Routine Cultures of all types</li>
                                        <li>Respiratory Viral Panel by PCR</li>
                                        <li>Nail Panel by PCR</li>
                                        <li>Wound Panel by PCR</li>
                                        <li>GI Panel by PCR</li>
                                        <li>STI Panel by PCR</li>
                                        <li>Bacterial Vaginosis Panel by PCR</li>
                                    </ul>
                                </div> */}
              </div>
              <div className="lab-service" id="5515" style={{ textAlign: "left" }}>
                <h2 onClick={this.startModalTestSearchHandler}><span>Pathology</span></h2>
                <div className="labPage">
                  <p>
                    Comprehensive Pathology services are available, tailored to your needs. Please <a href="/contact">contact Coast Diagnostics</a> for a customized approach to fit your practice requirements.
                                    </p>
                </div>
                <div className="labTestList">

                </div>
              </div>
              <div className="lab-service" id="5518" style={{ textAlign: "left" }}>
                <h2 onClick={this.startModalTestSearchHandler}><span>Next Gen Sequencing</span></h2>
                <div className="labPage">
                  <p>
                    Viral infections are a major global health concern, with new infectious diseases continuing to emerge. The 2019 outbreak of Coronavirus that began in Wuhan, China and quickly spread to multiple countries is a particularly concerning example. Coronaviruses are a large family of viruses that can infect humans, causing respiratory illnesses ranging from the common cold to more severe diseases, such as MERS-CoV and SARS-CoV.
                                    </p>
                  <p>
                    Next-generation sequencing (NGS) provides an effective, novel way to screen samples and detect viruses without previous knowledge of the infectious agent. Target enrichment is a resequencing method that captures genomic regions of interest by hybridization to target-specific biotinylated probes. Target enrichment through hybrid-capture methods allows for highly sensitive detection, without requiring the high read depth needed for shotgun metagenomics sequencing. This system of analyzer and software is best-in-class for microbial classification covering 50k microorganisms including 35K viruses, 13K bacteria, 4K fungi, 150+ parasites, and 6K human pathogens. Data was mined from 30 million abstracts and publications mined from PubMed enabling Explify to prioritize the 3K human pathogens based on unique disease phenotypes. The database is self-learning, continually improving search functionality. Next Gen Sequencing is the newest method of determining a cause of infection. Coast Diagnostics is engaged in efforts to offer Next Gen Sequencing as its newest testing for microbial identification and antibiotic susceptibility.
                                    </p>
                </div>

              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default LabServicesPage;
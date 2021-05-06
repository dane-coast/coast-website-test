import React, {Component} from 'react';
import Modal from '../../../Modal/Modal';
import Spinner from '../../../Spinner/Spinner'

import './TestItem.css'


class TestItem extends Component {
    state = {
        details:this.props.testId,
        showDetails: false,
        isLoading: false,
    }
    constructor(props) {
        super(props);

    }

    // 6089aabf616db95a65a64df5

    showDetailHandler = () => {
        // this.setState()
        // console.log(testId)
        this.setState({details: this.props.testId});
        this.setState({isLoading: true});
        console.log(this.state.details);
        console.log(this.props);


        const requestBody = {
            query: `
            query {
            test(id: "${this.state.details}") {
                _id
                title
                description
                AKA
                panel
                contains{
                    _id
                    title
                }
                LOINC
                CPT
                notes
                reflexCriteria
                specimenRequirements {
                    _id
                    volume
                    preferredContainer
                    sampleType
                    alternateContainer
                    transportTemp
                    stability
                    handlingInstructions
                    minimumVolume
                    fastingStatus
                }
                testing {
                    _id
                    frequency
                    department
                    expectedTAT
                    rejectionCriteria
                    methodology
                }
                }
            }
                `
        };
        fetch('https://mighty-coast-19334.herokuapp.com/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            if (res.status !== 200 && res.status !==21) {
                throw new Error('Failed')
            }
            return res.json();
        })
        .then(resData => {
            console.log('resData')
            console.log(resData);
            const test = resData.data.test
            this.setState({test: test, isLoading: false, showDetails: true})
            // this.fetchTests();
        })
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
        <React.Fragment>
             <li key={this.props.testId} className="tests__list-item">
            <div>
                
                <h1>{this.props.title}</h1>
                <h2>{this.props.CPT}</h2>
            </div>
            <div>
                <p>{this.props.description}</p> 
                <div className="btn" onClick={this.showDetailHandler}>View Details</div>        
            </div>
        </li>
        {this.state.showDetails && <Modal loading={this.state.isLoading} test={this.state.test}></Modal>}
        </React.Fragment>
       
        );
    }
}

export default TestItem;

// functional version
// const testItem = props => (
//     <li key={props.testId} className="tests__list-item">
//         <div>
//             <h1>{props.title}</h1>
//             <h2>{props.CPT}</h2>
//         </div>
//         <div>
//                 <p>{props.description}</p> 
//                 <button className="btn">View Details</button>        
//         </div>
//     </li>
    

// );

// export default testItem;
// end functional version




// query {
// 	searchTests(filter: {description: {contains: "PCR"}
//   })
// {
//   title
//   description
//   AKA
//   CPT
//   specimenRequirements {
//     preferredContainer
//     volume
//     transportTemp
//     stability
//   }
//   testing {
//     frequency
//     department
//     expectedTAT
    
//   }
// }}

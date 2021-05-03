import React from 'react';

import './TestItem.css'

const testItem = props => (
    <li key={props.testId} className="tests__list-item">
        <div>
            <h1>{props.title}</h1>
            <h2>{props.CPT}</h2>
        </div>
        <div>
                <p>{props.description}</p> 
                <button className="btn">View Details</button>        
        </div>
    </li>
    

);

export default testItem;




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

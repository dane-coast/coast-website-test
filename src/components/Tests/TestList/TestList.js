import React from 'react';

import TestItem from './TestItem/TestItem'
import './TestList.css'

const testList = props => {
    const tests = props.tests.map(test => {
        console.log(test)
        return (
            <TestItem 
                key={test._id} 
                testId={test._id} 
                title={test.title}
                CPT={test.CPT}
                description={test.description}
            />
        );
    })
    
    return (
    <ul className="test__list">
        {tests}
    </ul>
)};

export default testList;
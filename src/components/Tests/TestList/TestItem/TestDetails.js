import React from 'react';

// import TestItem from './TestItem/TestItem'
import './TestDetails.css'

const testDetails = props => {
    const test = props.test
        console.log(test)
        const items = []

        let tempArray = []
        Object.keys(test).forEach(key => {
            tempArray.push(key)
        })
        let objectKeys = []
         Object.keys(test).forEach(key => {
            objectKeys.push(test[key])
        })
        console.log(objectKeys)
        let final = []
        let x = 0;
        tempArray.forEach(key => {
            final.push(`<strong>${key}</strong>: ${objectKeys[x]}`)
            x += 1
        })
        console.log(tempArray)
        // Object.keys(test).forEach(akey => {
        //     items.push(<li key={x}>${akey}: {test[akey]}</li>)
        //     {x += 1}
        // })

        // TODO: pop testing and specimen requirements off and then add them back as separate lists elements
        let testing = []

        console.log(items)
        return (
            <div>
                <ul>
                    {final.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
    

export default testDetails;
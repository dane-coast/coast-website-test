import React from 'react';

// import TestItem from './TestItem/TestItem'
import './TestDetails.css'

const convertFromCamel = (str) => {
    let tempCharArr = []
    str.split('').forEach((char, idx) => {
        
        if (idx > 0) {
            if ((str[(idx -1 )] != str[(idx-1)].toUpperCase()) && char == char.toUpperCase()){
                tempCharArr.push(" ")
                tempCharArr.push(char)
            }
            else {
                tempCharArr.push(char)
            }
        }
        else {
            tempCharArr.push(char.toUpperCase())
        }
    })
    return tempCharArr.join('');
}



const testDetails = props => {
    const test = props.test
        console.log(test)
        let allKeys=[];
        let flatKeys = [];
        let keysToFlatten = []
        let flattencalled = 0;
        const flattenObject =  ((object) => {
            console.log(flatKeys)
            let tempObj;
            if (object) {
                if (Object.keys(object)) {
                    let keys = Object.keys(object)
                    console.log(flattencalled)
                    console.log('object')
                    console.log(keys)
                    keys.forEach(key => {
                        allKeys.push(key)
                        if (typeof object[key] === 'string' || typeof object[key] === 'number' || typeof object[key] === 'boolean') {
                            tempObj = 
                                [[key], object[key]]
                            
                            flatKeys.push(tempObj)
                        } else if (Array.isArray(object[key])) {
                            tempObj = 
                                [[key], (object[key].join(', '))]
                            
                            flatKeys.push(tempObj)
                        }
                        else if (typeof object[key] === 'null' || typeof object[key] === 'undefined') {
                            console.log(`${object[key]} is null or undefined`)
                        }
                        else {
                            
                                keysToFlatten.push(object[key])
                                flattencalled += 1
                                flattenObject(object[key])
                            
                        }
                    });
                }

            }
        });

        flattenObject(test);

        flatKeys.forEach((elem,idx) => {
            let temp = elem[1].toString()
            let newElem = temp.replace(/_/g, ' ');
            flatKeys[idx][1] = newElem
        })
        console.log(flattencalled);
        console.log(flatKeys);
        console.log(keysToFlatten);

        let indexesToPop = []
        flatKeys.forEach((key,idx) => {
            if (key[1] === "" || key[0] == '_id') {
                indexesToPop.push(idx)
            }
            else if (key[1] === false){
                flatKeys[idx][1] = 'False'
            }
            

            // the following converts camelCase to spaces but keeps acronyms -> capital letters next to each other acronyms
            let tempKey = key[0].toString()
            flatKeys[idx][0] = convertFromCamel(tempKey);
            // end acronym keeper convert camelCase to spaces 
        })
        indexesToPop.reverse();
        console.log(indexesToPop)
        indexesToPop.forEach(index => {flatKeys.splice(index,1)});
        
        // const items = []
        let testing = [];

        // console.log(items)
        return (
            <div>
                <ul>
                    {flatKeys.map((obj,idx) => {
                    return <li key={idx}><strong>{obj[0]}:</strong> {obj[1]}</li>;
                        })}
                </ul>
            </div>
        );
    }

        // let tempArray = []
        // Object.keys(test).forEach(key => {
        //     tempArray.push(key)
        // })
        // let objectKeys = []
        //  Object.keys(test).forEach(key => {
        //     objectKeys.push(test[key])
        // })
        // console.log(objectKeys)
        // let final = []
        // let x = 0;
        // tempArray.forEach(key => {
        //     final.push(`<strong>${key}</strong>: ${objectKeys[x]}`)
        //     x += 1
        // })
        // console.log(tempArray)
        // Object.keys(test).forEach(akey => {
        //     items.push(<li key={x}>${akey}: {test[akey]}</li>)
        //     {x += 1}
        // })

        // TODO: pop testing and specimen requirements off and then add them back as separate lists elements
    

export default testDetails;
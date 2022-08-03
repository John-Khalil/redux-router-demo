import React ,{useState} from 'react'
import axios from 'axios';

export function PerObjectTable({renderObject}){                             // the power of reusable components
    var listAllItems=[];
    var objectAttributeCount=Object.keys(renderObject||{}).length;          // calculate it once so it would be quicker
    Object.keys(renderObject||{}).forEach(element=>{
        listAllItems.push(<div className='cssDirectives' style={{width:`${Math.ceil((1/(objectAttributeCount+1))*100)}%`}}> { renderObject[element].toString() }</div>);     
        // this cannot be undefined cause the key wouldnt exist at this point
        // (1/(objectAttributeCount+1)) '1' was added to the dem to make sure that they display inline cause we have to make room for margins and padding etc
    });
    return(
        <div>
            {listAllItems}
        </div>
    );
}

export function ListInTable({arrayOfObjects}){                              // here we're assuming that all the objects inside the array have the same attributes
    var tableFirstRow={};                                                   // just a super empty object
    Object.keys((arrayOfObjects||{})[0]||{}).forEach(element=>{             // this should just return an array of all the keys represented in the object
        tableFirstRow[element]=element;                                     // creating an object listing all the key names
    });
    var listAllItems=[];
    var finalArrayOfObjects=[tableFirstRow];
    finalArrayOfObjects.concat(arrayOfObjects).forEach(element=>{
        listAllItems.push(<PerObjectTable renderObject={element}/>)
    });
    return(
        <>
            {listAllItems}
        </>
    );
}


export default function AnotherPage() {

    var finalTable=[];

    var testObjectList=[
        {
            name:'test',
            age:21
        },
        {
            name:'test',
            age:21
        },
        {
            name:'test',
            age:21
        },
        {
            name:'test',
            age:21
        },

    ];

    const [listOfObjects,updateListOfObjects]=useState(testObjectList);
    
    return (
        <>  
            <button className='bg-green-700 rounded-lg px-1' onClick={()=>{
                axios.get("https://jsonplaceholder.typicode.com/todos")         // handling a promise
                .then(getResponse=>{ 
                    updateListOfObjects(getResponse.data);
                }).catch(error=>{                                               // catching exceptions from promise
                    console.error(error);
                });
            }}>click me</button>    
            <ListInTable arrayOfObjects={listOfObjects}/> 
        </>
    )
}
 
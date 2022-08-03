import React ,{useState} from 'react'
import axios from 'axios';

/*export function PerObjectTable({renderObject}){                             // the power of reusable components
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
}*/


/*export function ListInTable({arrayOfObjects}){                              // here we're assuming that all the objects inside the array have the same attributes
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
}*/


export default function AnotherPage() {
    const initialTodos=[
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

    const [todos,setTodos]=useState(initialTodos);
    const fetchTodos=()=>{
        // handling a promise
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(getResponse=>{
                setTodos(getResponse.data);
            }).catch(error=>{
                // catching exceptions from promise
                console.error(error);
            }
        );
    }


    const getBadge =(isCompleted)=>{
        if (typeof (isCompleted) === "boolean"){
            if (isCompleted)
                return (<div className={"p-1 text-sm rounded-full mx-2 bg-green-50 text-green-500 border border-green-500"}> Completed </div>)
            else
                return (<div className={"p-1 text-sm rounded-full mx-2 bg-red-50 text-red-500 border border-red-500"}>Not Completed</div>)
        }
       return isCompleted
    }

    return (
        <>  
            <button className='bg-green-700 rounded-lg px-1' onClick={fetchTodos}>click me</button>
            <table className="table-auto">
                <thead>
                <tr className={"border border-b"}>
                    {Object.keys(todos[0]).map((attribute,index)=><th key={index} className={"border border-r"}>{attribute}</th>)}
                </tr>
                </thead>
                <tbody>
                {todos.map((todo,index)=>
                    <tr key={index}>
                        {Object.keys(todo).map((element, index)=><td key={index} className={"text-center"} >
                            {typeof (todo[element]) === 'boolean' ? getBadge(todo[element]) : todo[element] }
                        </td>)}
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}
 
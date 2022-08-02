import React from 'react'


export function PerObjectTable({renderObject}){         // the power of reusable components

    var listAllItems=[];

    var objectAttributeCount=Object.keys(renderObject||{}).length;       // calculate it once so it would be quicker
    Object.keys(renderObject||{}).forEach(element=>{
        listAllItems.push(<div className='cssDirectives' style={{width:`${Math.ceil((1/(objectAttributeCount+1))*100)}%`}}> {renderObject[element] }</div>);     
        // this cannot be undefined cause the key wouldnt exist at this point
        // (1/(objectAttributeCount+1)) '1' was added to the dem to make sure that they display inline cause we have to make room for margins and padding etc
    });


    return(
        <>
            <div>
                {listAllItems}
            </div>
        </>
    );
}

export function ListInTable({arrayOfObjects}){          // here we're assuming that all the objects inside the array have the same attributes

    var tableFirstRow={};       // just a super empty object
    Object.keys((arrayOfObjects||{})[0]||{}).forEach(element=>{
        tableFirstRow[element]=element;         // creating an object listing all the key names
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
            name:'john',
            age:21
        },
        {
            name:'john',
            age:21
        },
        {
            name:'john',
            age:21
        },
        {
            name:'john',
            age:21
        },

    ];
    
    return (
        <>  
            {/* <div>
                <div className='cssDirectives'> test 1</div>
                <div className='cssDirectives'> 23456788</div>
                <div className='cssDirectives'> tst</div>
                <div className='cssDirectives'> test-1-test-1</div>
                
            </div>
            <div>
                <div className='cssDirectives'> test 1</div>
                <div className='cssDirectives'> 23456788</div>
                <div className='cssDirectives'> tst</div>
                <div className='cssDirectives'> laboriosam mollitia et enim quasi adipisci quia provident illum</div>
                
            </div> */}

            

            <ListInTable arrayOfObjects={testObjectList}/>


            
        </>
    )
}
 
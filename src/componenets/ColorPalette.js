
import React, { useState } from "react";

import { useSelector } from "react-redux";


import '../App.css';


export default function ColorPalette() {


    const finalColor=useSelector(state=>state.colorPalette.value);

    return (
        <div className="felx  w-1/2 rounded-lg text-center" style={{backgroundColor:finalColor}}>ColorPalette</div>
    )
}


// questions i have 

// 1 what does the ... in tailwind class do 
// 2 how to pass a default value for the reducers outside the files they were defined in 

// 3 is there anyway i could create those reducers automatic since they are just boilerplate code


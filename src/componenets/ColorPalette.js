
import React, { useState } from "react";

import { useSelector } from "react-redux";


import '../App.css';


export default function ColorPalette() {


    const finalColor=useSelector(state=>state.colorPalette.value);

    return (
        <div className="felx  w-1/2 rounded-lg text-center" style={{backgroundColor:finalColor}}>ColorPalette</div>
    )
}

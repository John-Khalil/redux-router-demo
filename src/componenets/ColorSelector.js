import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import {finalColor} from "../reduxReducers/colorPalette";



export default function ColorSelector() {

    const dispatch=useDispatch();
    const initialColor=useSelector(state=>state.colorPalette.value);
    const [color,colorAdjust]=useState(initialColor);







    return (
        <>


            <br/><br/>
            <input className="felx w-1/6 rounded-lg text-center mx-5 inline-block"
                   style={{color:"black"}}
                   placeholder="example #56F478"
                   type="text" onChange={event=>colorAdjust(event.target.value)}
            />
            <button className="felx w-1/6 rounded-lg text-center mx-5 inline-block"
                    style={{backgroundColor:color}}
                    onClick={()=>dispatch(finalColor(color))}
            >
                apply
            </button>
        </>
    )
}
 
import React from 'react'

import {Link,Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <>
        <nav>
            <Link to="/home"> <div className="felx  m-1 p-1 rounded-lg text-center inline-block" style={{backgroundColor:"green"}}>main page</div> </Link>
            <Link to="/another-page"> <div className="felx m-1 p-1 rounded-lg text-center inline-block" style={{backgroundColor:"green"}}>another page</div> </Link>
            <Link to="/responsive-design"> <div className="felx m-1 p-1 rounded-lg text-center inline-block" style={{backgroundColor:"green"}}>responsive-design</div> </Link>
        </nav>
        <br></br>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

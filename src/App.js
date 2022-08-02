
import './App.css';


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AnotherPage from './AnotherPage';
import MainApp from './MainApp';
import Layout from './layouts/Layout';

export default function App() {
  return (

    <BrowserRouter>
      {/* <nav>
        <Link to="/"> <div className="felx  m-1 p-1 rounded-lg text-center inline-block" style={{backgroundColor:"green"}}>main page</div> </Link>
        <Link to="/page 2"> <div className="felx m-1 p-1 rounded-lg text-center inline-block" style={{backgroundColor:"green"}}>another page</div> </Link>
        
      </nav>
      <br></br> */}
      {/* i know this isnt the best practice to comment code but this is for demonestrating purpose  */}
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<MainApp />} />
          <Route path="home" element={<MainApp />} />
          <Route path="another-page" element={<AnotherPage />} />
          <Route path="*" element={<MainApp />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

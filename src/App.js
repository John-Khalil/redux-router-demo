
import './App.css';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnotherPage from './AnotherPage';
import MainApp from './MainApp';

export default function App() {
  return (

    <Router>
      <nav>
        <Link to="/"> <div className="felx  m-1 p-1 rounded-lg text-center inline-block" style={{backgroundColor:"green"}}>main page</div> </Link>
        <Link to="/page 2"> <div className="felx m-1 p-1 rounded-lg text-center inline-block" style={{backgroundColor:"green"}}>another page</div> </Link>
        
      </nav>
      <br></br>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="*" element={<AnotherPage />} />
      </Routes>
    </Router>
  )
}

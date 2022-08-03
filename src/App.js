import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnotherPage from './views/AnotherPage';
import MainApp from './views/MainApp';
import Layout from './componenets/layouts/Layout';
import Page404 from "./views/page404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout/>}>
          <Route path={'/'} element={<MainApp />} />
          <Route path="another-page" element={<AnotherPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

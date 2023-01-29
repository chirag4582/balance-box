// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter , Route,Routes} from "react-router-dom";
import Calculator from "./components/Calculator";
// import { Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path='/Calculator' element={<Calculator/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

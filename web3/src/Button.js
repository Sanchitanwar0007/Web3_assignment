import React from "react";
// import React-Dom from "react-dom";
// import { NavLink } from 'react-router-dom'
import All from './All';
import Free from "./Free";
import Paid from "./Paid";
import './button.css';
import { NavLink, Route, Routes } from "react-router-dom";
const Button = () => {
    const border=()=>{
       
    }
  return (
    <>
      <div className="button">
         <NavLink to="/" className="button1"><div>
            <p>All</p>
        </div></NavLink>
        <NavLink to="/paid" className="button1"><div>
            <p>Paid</p>
        </div></NavLink>
        <NavLink to="/free" className="button1"><div>
            <p>Free</p>
        </div></NavLink>
      </div>
          <Routes>
              <Route exact path="/" element={<All/>}></Route>
              <Route exact path="/paid" element={<Paid/>}></Route>
              <Route exact path="/Free" element={<Free/>}></Route>
          </Routes>
    </>
  );
};
export default Button;

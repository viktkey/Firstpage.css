import React from 'react';
import './Layout.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "../Pages/Home";
import {About} from "../Pages/About";
import {Contacts} from "../Pages/Contacts";
import Firstpage from "./Firstpage";

const Layout = () => {
    return (
        <>
            <Firstpage/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </>
    );
}

export default Layout;
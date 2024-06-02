import React from 'react';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from './pages/About';
import Order from './pages/Order';
import Profiles from './pages/Profiles';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Prof from './pages/Prof';
import { Uslugi } from './pages/Uslugi';
import UslugiList from './pages/UslugiList';
import UslugiDisplay from './pages/UslugiDisplay';

export default function App () {
    return (
      <>
      <header>
      </header>
      
      <BrowserRouter>
      <Navbar/>
      <div id="block2">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/uslugi" element={<UslugiList/>} />
      <Route path="/about" element={<About/>} />
        <Route path="/uslugi/:id" element={<UslugiDisplay />} />
        </Routes>
        <div id="block0"></div>
        <Footer/>
        </div>
    </BrowserRouter>
    </>
    )
}
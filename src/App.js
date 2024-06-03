import React from 'react';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from './pages/About';
import Feed from './pages/Feed';
import FeedComplete from './pages/FeedComplete';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Route path="/feed" element={<Feed/>} />
      <Route path="/feedcomplete" element={<FeedComplete/>} />
        <Route path="/uslugi/:id" element={<UslugiDisplay />} />
        </Routes>
        <div id="block0"></div>
        <Footer/>
        </div>
    </BrowserRouter>
    </>
    )
}
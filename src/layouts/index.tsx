import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

const Layout = ({children}: any) => {
  return (
    <div className="w-full mx-auto">
      <BrowserRouter>
      <div className="fixed w-full h-30 z-2000">
        <Header/>
      </div>
      <div>
        {children}
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Layout;

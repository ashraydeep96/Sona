import React from 'react'
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Bars from './Components/Bars/Bars';
import { Footer } from './Components/Footer/Footer';
import Dashboard2 from './pages/Dashboard/Dashboard2/Dashboard2';
import Landing from './pages/GetStarted/Landing';
import Portfolio from './pages/Portfolio/Portfolio';
import Search from './pages/Search/Search';
import Buy from './pages/Buy/Buy';
import Sell from './pages/Sell/Sell';
import Cart from './pages/Cart/Cart';
import Accounts from './pages/Accounts/Accounts';
import { useAuth0 } from "@auth0/auth0-react";
import Error from './pages/Error/Error';

const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className='overflow-hidden bg-gray-900 App'>
      <Bars/>
      <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard2/> : <Landing/>} />
        <Route path="/dashboard" element={<Dashboard2/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/search" element={<Search />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react';
import './App.css';
import { Caurasel } from './components/Caurasel';
import { Destinations } from './components/Destinations';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { Selects } from './components/Selects';

function App() {
  return (
    <div >
        <Navbar />
        <Hero />
        <Destinations/>
        <Search/>
        <Selects/>
        <Caurasel/>
        <Footer/>
    </div>
  );
}

export default App;

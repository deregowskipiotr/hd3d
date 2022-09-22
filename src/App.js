import React from 'react';
import { Blog, Footer, Possibility, Features, Header, WhatHd3d} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';




const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <div>
          <Brand />
          <WhatHd3d />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;
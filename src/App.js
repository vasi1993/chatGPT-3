import React from 'react'
import {Footer, Blog, Possibillity, Features, WhatGPT3, Header} from './containers'
import {Cta, Brand, Navbar} from './Components'
import './App.css'


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
       < Possibillity />
       <Cta />
       <Blog />
       <Footer />

     
    </div>
  )
}

export default App

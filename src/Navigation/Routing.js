import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import  Products from '../pages/Products';
// import Cards from '../components/Cards';
import CardsDetails from '../components/CardsDetails';
import Footer from '../pages/Footer';
import Hero from '../pages/Hero';

function Routing() {
  return (
    <div>
   <Header></Header>  
      
       <Hero></Hero>
    <Routes>    
        {/* <Route path='/' element={<Cards />} /> */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/cart/:id' element={<CardsDetails />} />
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        
    </Routes>
    <Footer></Footer>
    </div>
  )
}

export default Routing
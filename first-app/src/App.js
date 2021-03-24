import React from 'react';
import './App.css';
import Navbar from './Navbar'; 
import Banner from './Banner';
import Thumbnail from "./Thumbnail";
import Footer from './Footer';

function App() {
  return (
    <div style ={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh'}}>
      <Navbar/>
      <Banner/>
      <div style={{display: 'flex', width:'100%',height:'50hv', flexWrap:'wrap', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'space-evenly'}}>
        <Thumbnail name ="Thumb 1"/>
        <Thumbnail name ="Thumb 2"/>
        <Thumbnail name ="Thumb 3"/>
        <Thumbnail name ="Thumb 4"/>
        <Thumbnail name ="Thumb 5"/>
        <Thumbnail name ="Thumb 6"/>
        <Thumbnail name ="Thumb 7"/>
        <Thumbnail name ="Thumb 8"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

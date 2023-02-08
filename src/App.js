import React from 'react';
import './App.css'
// import "node_modules/video-react/dist/video-react.css";
// import Navbar from './features/navbar/Navbar';
import Header from './features/navbar/Header';
import Banner from './features/banner/Banner';
import DetailCard from './features/image-section/DetailCard';
import Footer from './features/footer/Footer';
// import CardDetailHolder from './assets/card detail holder/CardDetailHolder';

function App() {
  return (
    <div >
    <Header/>
    <Banner/>
    <DetailCard/>
    <Footer/>
    {/* <CardDetailHolder/> */}
    </div>
  );
}

export default App;

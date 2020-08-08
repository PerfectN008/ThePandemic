import React from 'react';

import './App.scss';
import Header from './Components/Header/Header';
import CountryData from './Components/CountryData/CountryData';
import RegionData from './Components/RegionalData/RegionalData';
import VaccineData from './Components/VaccineData/VaccineData';
import Footer from './Components/Footer/Footer';

function App() {
  return(
      <div className="App">
        <Header />
        <CountryData />
        <RegionData />
        <VaccineData />
        <Footer />
      </div>
    );
  }

export default App;

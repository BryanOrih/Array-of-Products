import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useContext } from 'react';
import {MainContext} from './Context/MainContext'
import MainHeader from './Components/Header/MainHeader';

function App() {

  const {allProducts, setAllProducts} = useContext(MainContext)
  console.log(allProducts);

  return (
    <div className="App">
      <MainHeader/>
    </div>
  );
}

export default App;

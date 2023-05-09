import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useContext } from 'react';
import {MainContext} from './Context/MainContext'
import MainHeader from './Components/Header/MainHeader';
import Display from './Components/Display/Display'
import Input from './Components/editInput/Input'

function App() {

  const {allProducts, setAllProducts} = useContext(MainContext)

  return (
    <div className="App">
      <MainHeader/>
      <Input/>
      <Display />
    </div>
  );
}

export default App;

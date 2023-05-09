import {useState, useEffect, createContext} from 'react';
import {Products} from '../database';

export const MainContext = createContext();

const MainContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() =>{
        setAllProducts(Products)
    }, [])
    

    return (
        <MainContext.Provider value={{
            allProducts, 
            setAllProducts,
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;
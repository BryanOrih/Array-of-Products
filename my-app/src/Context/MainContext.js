import {useState, useEffect, createContext} from 'react';
import {Products} from '../database';

export const MainContext = createContext();

const MainContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    useEffect(() =>{
        setAllProducts(Products)
        setDisplayProduct(Products)
    }, [])
    

    return (
        <MainContext.Provider value={{
            allProducts, 
            setAllProducts,
            displayProduct, 
            setDisplayProduct
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;
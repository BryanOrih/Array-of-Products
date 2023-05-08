import React from 'react'
import {MainContext} from './Context/MainContext'
const Display = () => {
    const {allProducts, setAllProducts, displayProduct, setDisplayProduct} = useContext(MainContext)

    const Populate = () =>{
        allProducts.map()
        return(
            <img src=''/>
        )
    }

  return (
    <div>Display</div>
  )
}

export default Display
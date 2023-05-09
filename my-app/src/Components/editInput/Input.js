import React, { useEffect, useState, useContext } from 'react'
import {MainContext} from '../../Context/MainContext'
import './Input.css'
const Input = () => {
    const {allProducts, setAllProducts, displayProduct, setDisplayProduct} = useContext(MainContext)
    const [input, setInput] = useState({
        name: "",
        price: "",
        description: "",
        img: ""
    })

    const handleInput = (e) =>{
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(Object.values(input).includes("")) return;
        let inputStuff = {...input}
        setAllProducts(
            [
                ...allProducts,
                inputStuff
            ]
        )
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input name="name" value={input.name} onChange={handleInput}/>
        <label htmlFor='price'>Price:</label>
        <input name="price" type='number' value={input.price} onChange={handleInput}/>
        <label htmlFor='description'>Description:</label>
        <textarea value={input.description} name="description" onChange={handleInput}></textarea>
        <label htmlFor='img'>Image URL</label>
        <input name="img" value={input.img} onChange={handleInput}/>
        <button>Submit</button>
    </form>
  )
}

export default Input
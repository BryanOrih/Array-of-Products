import React from 'react'
import { useEffect, useState, useContext, createElement } from 'react';
import {MainContext} from '../../Context/MainContext'
import './Display.css'
import { createRoot } from 'react-dom/client';

const Display = () => {
    const {allProducts, setAllProducts} = useContext(MainContext)

    
    function ConfirmEdit({editInput, index, root}){
        return(
            <>
                <img src={editInput.img}/>
                <div>
                    <h3>Name: {editInput.name}</h3>
                    <p>Price: {editInput.price}</p>
                    <p>description: {editInput.description}</p>
                    <div className='buttons'>
                        <button onClick={handleDelete}>DELETE</button>
                        <button onClick={(e) => handleEdit(e,index, root)}>EDIT</button>
                    </div>
                </div>
            </>
        )
    }

    const handleSubmit = (e, index, editInput, root) =>{
        e.preventDefault()
        if(Object.values(editInput).includes("")) return;
        document.querySelector(`.Num${index}`).style.border = 'none';
        root.render(<ConfirmEdit editInput={editInput} index={index} root={root}/>);
        
    }

    function Edit({ img, h1, price, description, index, root}) {
        const [editInput, setEditInput] = useState({
            name: `${h1}`,
            price: `${price}`,
            description: `${description}`,
            img: `${img}`
        })
        return(
            <form className="editForm" onSubmit={(e)=>handleSubmit(e, index, editInput, root)}>
                <h3>Edit</h3>
                <label htmlFor='name'>Name:</label>
                <input name="name" value={editInput.name} onChange={(e) => {setEditInput({...editInput, [e.target.name]: e.target.value})}}/>
                <label htmlFor='price'>Price:</label>
                <input name="price" type='number' value={editInput.price} onChange={(e) => {setEditInput({...editInput, [e.target.name]: e.target.value})}}/>
                <label htmlFor='description'>Description:</label>
                <textarea value={editInput.description} name="description" onChange={(e) => {setEditInput({...editInput, [e.target.name]: e.target.value})}}></textarea>
                <label htmlFor='img'>Image URL</label>
                <input name="img" value={editInput.img} onChange={(e) => {setEditInput({...editInput, [e.target.name]: e.target.value})}}/>
                <button>Submit Edit</button>
            </form>
        ) 
    }

    const handleDelete = (e) =>{
        e.target.parentElement.parentNode.parentElement.remove()
    }

    const handleEdit = (e, index, root) =>{
        let img = e.target.parentElement.parentNode.parentElement.children[0].src;
        let h1= e.target.parentElement.parentNode.parentElement.children[1].children[0].textContent.replace("Name: ", "");
        let price = e.target.parentElement.parentNode.parentElement.children[1].children[1].textContent.replace("Price: ", "")
        let description = e.target.parentElement.parentNode.parentElement.children[1].children[2].textContent.replace("description: ", "")
        if(root){
            document.querySelector(`.Num${index}`).style.border = '1px black solid';
            root.render(<Edit img={img} h1={h1} price={price} description={description} index={index} root={root}/>);
        }else{
            let root = createRoot(document.querySelector(`.Num${index}`));
            document.querySelector(`.Num${index}`).style.border = '1px black solid';
            root.render(<Edit img={img} h1={h1} price={price} description={description} index={index} root={root}/>);
        }
    }
    const Populate = allProducts.map((product, index)=>{
        return(
            <div className={`display Num${index}`} key={product + index}>
                <img src={product.img}/>
                <div>
                    <h3>Name: {product.name}</h3>
                    <p>Price: {product.price}</p>
                    <p>description: {product.description}</p>
                    <div className='buttons'>
                        <button onClick={handleDelete}>DELETE</button>
                        <button onClick={(e) => handleEdit(e,index)}>EDIT</button>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div>{Populate}</div>
  )
}

export default Display
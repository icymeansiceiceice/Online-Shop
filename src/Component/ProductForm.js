import React, { useState } from 'react'

export default function ProductForm(props) {
    let [name,setName] = useState('');
    let [price,setPrice] = useState('');
    let [description,setDescription] = useState('');
    let [stock,setStock] = useState(false);
    let [image,setImage] = useState('');

    let nameInput = (e)=>{
        setName(e.target.value);
    }
    let priceInput = (e)=>{
        setPrice(e.target.value);         
    }
    let descriptionInput = (e)=>{
        setDescription(e.target.value);          
    }
    let stockInput = (e)=>{
        setStock(e.target.checked);          
    }
    let imageInput = (e)=>{
        setImage(e.target.value);          
    }
    let createProduct= (e)=>{
        e.preventDefault();
        let product = {
            pID:9,
            pName:name,
            desc:description,
            isAvailable:Boolean(stock),
            image:image,
            price:Number(price)
        }
        props.createProduct(product);
        setName('')
        setPrice('')
        setDescription('')
        setStock(false)
        setImage('')
        props.onCancel();
    }

  return (
    <form className="row g-3" onSubmit={createProduct}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name" onChange={nameInput} value={name}/>
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"  onChange={priceInput} value={price}/>
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description" onChange={descriptionInput} value={description}/>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" onChange={stockInput} checked={stock}/>
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" onChange={imageInput} value={image}/>
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
        <button type="button" className="btn btn-primary" onClick={props.onCancel}>Cancel</button>
    </form>
  )
}

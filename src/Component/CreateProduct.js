import React, { useState } from 'react'
import ProductForm from './ProductForm'

export default function CreateProduct(props) {
  let [showForm,setShowForm] = useState(false);
  let onCreateProduct = (product)=>{
     props.createProduct(product)
  }
  let onCreateNewProduct = ()=>{
      setShowForm(true)
  }
  let onProductSubmittedORCancel = ()=>{
      setShowForm(false);
  } 
  return (
        <div  style={{backgroundColor:'white',padding:'10px 20px',marginBottom:20}}>
            {!showForm && <button onClick={onCreateNewProduct}>Create Product</button>}
            {showForm && <ProductForm createProduct={onCreateProduct} onCancel={onProductSubmittedORCancel}></ProductForm>}
        </div>

  )
}

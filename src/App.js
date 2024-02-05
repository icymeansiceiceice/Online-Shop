import React, { useState } from 'react'
import './App.css'
import ProductList from './Component/ProductList';
import CreateProduct from './Component/CreateProduct';
import FilterProduct from './Component/FilterProduct';

let products = [
  {
      pID: 1, 
      pName: 'Fresh Milk', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: 'images/fresh-milk.png',
      price: 12
  },
  {
      pID: 2, 
      pName: 'Cottage Cheese', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/cottage-cheese.png",
      price: 10
  },
  {
      pID: 3, 
      pName: 'Brocoli', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/brocoli.png",
      price: 15
  },
  {
      pID: 4, 
      pName: 'Oranges', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/oranges.png",
      price: 20
  },
  {
      pID: 5, 
      pName: 'Olive oil', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/olive-oil.png",
      price: 14
  }
]


export default function App() {
  let[newProductList,setNewProductList] = useState(products);
  let[filervalue,setFilervalue] = useState('all');
  let filterProductList = newProductList.filter((data)=>{
    if(filervalue === 'available'){
      return data.isAvailable === true;
    }
    else if(filervalue === 'unavailable'){
      return data.isAvailable === false;
    }else{
      return data;
    }
  })

  let creatProduct = (product)=>{
    product.pID = newProductList.length + 1;
    setNewProductList([product,...newProductList]);
  }
 
  let filterValueSelected = (value)=>{
      setFilervalue(value);
  }

  return (
    <div className='row'>
      <div className='col-lg-8 mx-auto'>
        <CreateProduct createProduct={creatProduct}></CreateProduct>
        <FilterProduct filterValue={filterValueSelected}></FilterProduct>
        <ProductList newProductList={filterProductList}></ProductList>
    </div>
    </div>
  )
}

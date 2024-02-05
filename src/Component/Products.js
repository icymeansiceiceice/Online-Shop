import React from 'react'
import ProductDetail from './ProductDetail';

export default function Products(props) {

  let style = {
    padding : '0px 20px',
    fontSize : 14
  }
  
  

  return (
    
    <li className="list-group-item" style={{backgroundColor: props.isAvailable ?  'white' : 'lightgrey'}}>
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="font-italic text-muted mb-0 small">{props.description}</p>
          <ProductDetail price={props.price} isAvailable={props.isAvailable}>
            
          </ProductDetail>
        </div>
        <img src={(props.imageUrl)} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
        </div>
    </li>

  )
}

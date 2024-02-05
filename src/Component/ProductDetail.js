import React, { useState } from 'react'
import Button from './Button';


export default function ProductDetail(props) {

    let bageClass = 'badge-margin-left-40 badge ';
     bageClass += props.isAvailable === true ? 'bg-success' : 'bg-danger'
    let [productCount,setProductCount] = useState(0);
    let displayFormattedProductCount=()=>{
    return productCount > 0 ? productCount : 'Zero';
  }
  let increasementProductCount = ()=>{
    setProductCount(++productCount);
    console.log(productCount)
  }
  let decreasementProductCount = ()=>{
    setProductCount(--productCount);
    console.log(productCount)
  }

  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{marginRight:'30px'}}>${props.price}</h6>
            <Button eventHandler={decreasementProductCount} disable={productCount == 0 }>-</Button>
            <span style={{padding : '0px 20px',fontSize : 14}}>{displayFormattedProductCount()}</span>
            <Button eventHandler={increasementProductCount}>+</Button>
            <span className={bageClass}>{props.isAvailable ? 'Available' : 'UnAvailable'}</span>
            
    </div>
  )
}

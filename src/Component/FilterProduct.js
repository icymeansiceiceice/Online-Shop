import React from 'react'
import './FilterProduct.css'

export default function FilterProduct(props) {
    let onFilterHandler = (e)=>{
        props.filterValue(e.target.value);
    }
  return (
    <div className='filter-area'>
        <select name="isAvailable" onChange={onFilterHandler}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option  option value="unavailable">Unavailable</option>
        </select>
    </div>
  )
}

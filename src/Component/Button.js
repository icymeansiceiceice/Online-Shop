import React from 'react'

export default function Button(props) {


  return (
         <button onClick={props.eventHandler} className='btn btn-primary' disabled={props.disable}>{props.children}</button>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const CheckPro = (props) => {
  // const {heading1, price} = props
  const {item} = props

  return (
    <>
     <h1>This is check pro</h1> 
     <h1>{item.heading1}</h1>
     <p>{item.price}</p>
      <Link to="/Category">
     <button className='btn btton'>Return</button>
     </Link>
    </>
  )
}

export default CheckPro

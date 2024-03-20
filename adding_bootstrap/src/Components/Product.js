import React from 'react'

export default function Product(props) //in props all the productlist will be there 
{
  return (
    <div className='row'>
      <div className='col-6'></div>
      <h2>{props.name}</h2>
    </div>
  )
}

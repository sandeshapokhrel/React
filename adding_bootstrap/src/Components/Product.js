import React from 'react'

export default function Product(props) //in props all the productlist will be there 
{ 
  function incrementQuantity(index){

  }//you cannot change prop property
  //chance are allowed when you use state or use
  //state is the data of the component so if you wanna update the data you can use state or use
  return (
    <div className='row'>
      <div className='col-5'></div>
      <h2>{props.product.name}<span class="badge bg-secondary">{props.product.price}</span></h2> {/* communication between components */}
    <div>
      <div className="col-3">
      <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">_</button>
  <button type="button" class="btn btn-primary">{props.product.quantity}</button>
  <button type="button" class="btn btn-primary" onclict={this.incrementQuantity()}>+</button>

</div>
      </div>

     <div className="col-4">
      {props.product.quantity*props.product.price}
     </div>

    </div>

    </div>
  )
}

import React from 'react';
import Product from './Product';
//there are two ways to take an argunment
// 1.destructring object
// 2. props
//props and variable are two different things
//props are not changable 
//All components on react are pure function where pure function mean The output remains the same as long as the inputs remain unchanged
//Using Destructure:- 
// export default function ProductList({product}) { 
  //  console.log(product)
// Using props:-
//for loop can be use in jsx we need to use map function, foreach 
export default function ProductList (props) {
 return (
    props.productlist.map((product, index)=>{
      console.log(product);
        return <Product key={index} product={product} incrementQuantity={props.incrementQuantity}/>
    })
  )
}

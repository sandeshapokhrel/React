//how list work 
//react is based on virtual DOM
// list1= ["1" "2"] here if we compare list 1 and 2 list 1 have "3" so react will creat a new list snd render that
// list2= ["1" "2" "3"]
// if react wont create a new list than there is no difference between using react or js
// in JS if we change anything whole DOM tree will be created again but to avoid that we use react, react have key to avoid it
// key helps react identify which items have changed, added, or are removed. also keu should be given to the elements inside 
// the array to gice the element a stable identity, 
//all key's are unique

import React from 'react'


//rendering of list in react

function App (){
  const IPL = ["apple", "ball", "cat"] // if you repeat anything it will show error because key 
//are always unique else you can use INDEX because it starts from {0,1,2,3}
//map function
  const result=IPL.map((ipl)=><h1>{ipl}</h1>)
  return(
    <div className='app'>
      <h1>{result}</h1>
    </div>
  );
}
export default App;
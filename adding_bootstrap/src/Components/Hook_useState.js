//with hooks we can use class component features in functional component such as state, life cycle
//pure component
//to use feature of class component in functional component
//Basic React Hooks are of two types 
// useState
// useEffect
// Hooks have a few rules:
// They can only be called inside React function components.
// They must be called at the top level of a component (not inside loops or conditions).
// Hooks cannot be used in React class components.

import React, { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("pink")}>Pink</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  );
}
export default FavoriteColor;

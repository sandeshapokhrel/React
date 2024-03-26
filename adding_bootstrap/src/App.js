import React, { useState } from "react";
import Cart from "./Components/cart";
import Component_Life_Cycle from "./Components/Component_Life_Cycle";
import List_and_Keys from "./Components/List_and_Keys";

function App() {
  // Define a state variable to control cart visibility
  const [showCart, setShowCart] = useState(false);

  // Define a state variable to control lifecycle trigger
  const [triggerLifecycle, setTriggerLifecycle] = useState(false);

  // Define a state variable to control list and key trigger
  const [triggerListAndKeys, setTriggerListAndKeys] = useState(false);

  // Function to toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Function to toggle lifecycle trigger
  const toggleLifecycle = () => {
    setTriggerLifecycle(!triggerLifecycle);
  };

  // Function to toggle list and key
  const toggleListAndKeys = () => {
    setTriggerListAndKeys(!triggerListAndKeys);
  };

  return (
    <>
      {/* Button to toggle cart visibility */}
      <button onClick={toggleCart}>Open Cart</button>

      {/* Conditional rendering of the cart component */}
      {showCart && <Cart />}

      {/* Button to toggle lifecycle execution */}
      <button onClick={toggleLifecycle}>
        {triggerLifecycle ? "Turn off Lifecycle" : "Turn on Lifecycle"}
      </button>

      {/* Render Component_Life_Cycle with triggerLifecycle prop */}
      {triggerLifecycle && <Component_Life_Cycle />}

      {/* Button to toggle list and key */}
      <button onClick={toggleListAndKeys}>
        {triggerListAndKeys ? "Hide List and Keys" : "Show List and Keys"}
      </button>

      {/* Render List_and_Keys with triggerListAndKeys prop */}
      {triggerListAndKeys && <List_and_Keys />}
    </>
  );
}

export default App;
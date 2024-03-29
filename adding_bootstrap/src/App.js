import React, { useState } from "react";
import Cart from "./Components/cart";
import Component_Life_Cycle from "./Components/Component_Life_Cycle";
import List_and_Keys from "./Components/List_and_Keys";
import FavoriteColor from "./Components/Hook_useState";
import HOC from "./Components/Higher_Order_component";
import Timer from "./Components/Hook_useEffect";

// Import the createApp function from your authentication components
import createApp from "./Components/Other_Hooks";

function App() {
  // Define a state variable to control cart visibility
  const [showCart, setShowCart] = useState(false);

  // Define a state variable to control lifecycle trigger
  const [triggerLifecycle, setTriggerLifecycle] = useState(false);

  // Define a state variable to control list and key trigger
  const [triggerListAndKeys, setTriggerListAndKeys] = useState(false);

  // Define a state variable to control HOC trigger
  const [triggerHOC, setTriggerHOC] = useState(false);

  // Define a state variable to control FavoriteColor component trigger
  const [triggerFC, setTriggerFC] = useState(false);

  // Define a state variable to control Timer component trigger
  const [triggerTimer, setTriggerTimer] = useState(false);

  // Define a state variable to control authentication component trigger
  const [triggerAuth, setTriggerAuth] = useState(false);

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

  // Function to toggle HOC
  const toggleHOC = () => {
    setTriggerHOC(!triggerHOC);
  };

  // Function to toggle FavoriteColor component
  const toggleFC = () => {
    setTriggerFC(!triggerFC);
  };

  // Function to toggle Timer component
  const toggleTimer = () => {
    setTriggerTimer(!triggerTimer);
  };

  // Function to toggle authentication components
  const toggleAuth = () => {
    setTriggerAuth(!triggerAuth);
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

      {/* Button to toggle HOC */}
      <button onClick={toggleHOC}>
        {triggerHOC ? "Disable HOC" : "Enable HOC"}
      </button>

      {/* Render HOC component based on triggerHOC */}
      {triggerHOC && <HOC />}

      {/* Button to toggle FavoriteColor component */}
      <button onClick={toggleFC}>
        {triggerFC ? "Disable FC" : "Enable FC"}
      </button>

      {/* Render FavoriteColor component based on triggerFC */}
      {triggerFC && <FavoriteColor />}

      {/* Button to toggle Timer component */}
      <button onClick={toggleTimer}>
        {triggerTimer ? "Disable Timer" : "Enable Timer"}
      </button>

      {/* Render Timer component based on triggerTimer */}
      {triggerTimer && <Timer />}

      {/* Button to toggle authentication components */}
      <button onClick={toggleAuth}>
        {triggerAuth ? "Disable Authentication" : "Enable Authentication"}
      </button>

      {/* Render authentication components based on triggerAuth */}
      {triggerAuth && <createApp />}
    </>
  );
}

export default App;

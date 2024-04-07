import React, { useState } from 'react';

function AgeRendering() {
  const [age, setAge] = useState('');
  
  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      
      <label htmlFor="ageInput">Enter your age:</label>
      <input 
        type="number" 
        id="ageInput" 
        value={age} 
        onChange={(e) => setAge(e.target.value)}
      />

      {age !== '' && (
        <div>
          {age > 10 ? (
            <p>You are older than 10 years old!</p>
          ) : (
            <p>You are not older than 10 years old.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AgeRendering;
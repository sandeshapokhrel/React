import React from 'react';
import './index.css';
import Create from './components/create';

function App() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <Create /> {/* Use the Create component here */}
      Hello, Tailwind CSS!
    </div>
  );
}

export default App;
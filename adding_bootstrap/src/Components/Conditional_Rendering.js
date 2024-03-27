// Based on certain condition you want to hide or unhide certain component so to achive that
//we use conditional rendering
//ways for conditional rendering
//IF/ELSE
//Element Variables
//Ternary Operator
//Short Circuit Operation

import React from 'react'
import age_Rendering from './age_Rendering';
function Render (){
    return (
        <div children="app">
           <age_Rendering/>
        </div>
    );
}
export default Render;
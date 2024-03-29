//H0C is a advance technique in react for reusing component logic. 
//it is not the part of reactAPI
import React from 'react'
import Clickcounter_HOC from './clickcounter_HOC';

function HOC (){
 return (
    <div className='App'>
        <Clickcounter_HOC />
    </div>
 );
}
export default HOC;
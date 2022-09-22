import React, { Component } from 'react';
import './pageExample.style.css';

//IMPORTING COMPONENT FROM HIS PARENT DIRECTORY
import ExampleComponent from '../../components/exampleComponent';


const PageExample = (props) => {
    return ( <div className='page-example-wrapper'>
        
        <h1>this is page example 1</h1>
        {/* CALLING COMPONENT */}
        <ExampleComponent/>

    </div> );
}
 
export default PageExample;
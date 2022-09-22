import React from 'react';
import './exampleComponent.style.css'

const ExampleComponent = (props) => {
    return ( 
    <div className='example-component-wrapper'>
        <div className='child'>This is example component</div>
        {/* OTHER JSX CODE HERE */}
    </div> 
    );
}
 
export default ExampleComponent;
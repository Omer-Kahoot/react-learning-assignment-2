import React from 'react';

const validationComponent = (props) => {
    let toShowDiv = null;
    if (props.length > 5)   
        toShowDiv = (
            <p>Text long enough.</p>
        ); 
    else 
        toShowDiv = (
            <p>Text is too short</p>
        );
    return (
        <div>
            {toShowDiv}
        </div>
    );
}

export default validationComponent;
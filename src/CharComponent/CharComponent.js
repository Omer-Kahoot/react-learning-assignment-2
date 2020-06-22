import React from 'react';

const charComponent = (props) => {
    const inlineStyle = {
        padding : '16px',
        textAlign : 'center',
        margin : '16px',
        border : '1 px solid black'
    };
    return (
        <div style={inlineStyle} onClick={props.click}>
            Char extracted from props is {props.singleCharacter}
        </div>
    );
};

export default charComponent;
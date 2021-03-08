import React from 'react';

const button = (props) => {
    return (
        <button className={props.className || 'btn'} onClick={props.onButtonPress}>
            {props.children}
        </button>
    );
};

export default button;
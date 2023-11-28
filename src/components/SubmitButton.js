import React from 'react';
import "../App.css"

const SubmitButton = ({onClick}) => (
    <div style={{marginRight: '16%'}}>
        <button className={"buttonWithImage"} onClick={onClick}>
        </button>
    </div>
);

export default SubmitButton;
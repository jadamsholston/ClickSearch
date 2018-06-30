import React from 'react';
import './gamespace.css';

const GameSpace = props => (
    <div className="gameSpace">
        <div className="flexGrid">{props.children}</div>
    </div>
);

export default GameSpace;
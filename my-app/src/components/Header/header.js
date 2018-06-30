import React from 'react';
import './header.css';

const Header = props => (
    <div className="row header">
        <h2 className="col-sm text-center header-text">Clicky Game</h2>
        <h className="col-sm text-center header-text"> Click on an image to earn points, but don't click on any more than once!</h3>
        <h3 className='col-sm text-center header-text'>Score: {props.score} | Top Score: {props.topScore}</h3>
    </div>
);

export default Header;


//score will have a props.score and top score will hold props.topScore
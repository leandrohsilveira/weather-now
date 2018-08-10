import React from 'react';

import defaultLogo from './logo.svg';
import './TopBar.css';

const TopBar = ({logo = defaultLogo}) => (
    <header className="TopBar-header">
        <div className="TopBar-content flex">
            <img className="TopBar-logo" src={logo} alt="WeatherNow Logo" />
        </div>
    </header>
);

export default TopBar;
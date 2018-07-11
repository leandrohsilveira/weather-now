import React, { Fragment } from 'react';
import TopBar from './TopBar';

import './Layout.css';

const Layout = ({ children }) => (
    <Fragment>
        <TopBar />
        <main className="Layout-main">
            <div className="Layout-container">
                {children}
            </div>
        </main>
    </Fragment>
);

export default Layout;
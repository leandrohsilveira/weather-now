import React, { Fragment } from 'react';
import TopBar from './TopBar';

import './Layout.css';

const Layout = ({ children }) => (
    <Fragment>
        <TopBar />
        <main className="Layout-main flex">
            <div className="Layout-container flex">
                {children}
            </div>
        </main>
    </Fragment>
);

export default Layout;
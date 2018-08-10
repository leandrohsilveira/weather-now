import React, { Fragment } from 'react';
import styled from 'styled-components';

import TopBar from './TopBar';

const Main = styled.main`
    flex: 1;
    flex-direction: row;
    justify-content: center;
`

const Container = styled.div`
    flex-direction: column;
    justify-content: center;
    background-color: #f1f1f1;
    margin-top: 55px;
    min-height: 835px;
    width: 1025px;
    -webkit-box-shadow: inset 0px 1px 1px 0px rgba(51,51,51,0.1);
    -moz-box-shadow: inset 0px 1px 1px 0px rgba(51,51,51,0.1);
    box-shadow: inset 0px 1px 1px 0px rgba(51,51,51,0.1);

    @media screen and (max-width: 1025px) {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        width: 100%;
    }

    @media screen and (max-width: 599px) {
        min-height: auto;
        justify-content: start;
    }
`

const Layout = ({ children }) => (
    <Fragment>
        <TopBar />
        <Main className="flex">
            <Container className="flex">
                {children}
            </Container>
        </Main>
    </Fragment>
);

export default Layout;
import React from 'react';
import styled from 'styled-components';

import defaultLogo from './logo.svg';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const Content = styled.div`
    width: 100%;
    height: 55px;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    background-color: #ffffff;
    
    @media screen and (max-width: 1025px) {
        -webkit-box-shadow: 0px 1px 1px 0px rgba(51,51,51,0.1);
        -moz-box-shadow: 0px 1px 1px 0px rgba(51,51,51,0.1);
        box-shadow: 0px 1px 1px 0px rgba(51,51,51,0.1);
    }
`

const Logo = styled.img`
    align-self: center;
    height: 24px;
`

const TopBar = ({ logo = defaultLogo }) => (
    <Header>
        <Content className="flex">
            <Logo src={logo} alt="WeatherNow Logo" />
        </Content>
    </Header>
);

export default TopBar;
import React from 'react';

import styled from 'styled-components';
import {media} from '../utils/media';

export const Header = styled.header`
    text-align: left;
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    width: 80%;
    min-height: 80vh;
    ${media.handheld`
    width: 100%;
    `}
`
export const Main = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
} 

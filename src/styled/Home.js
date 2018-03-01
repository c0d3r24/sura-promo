import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/media';

export const Container = styled.div`
   
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #292929; 
    font-family: 'Roboto', sans-serif;
`
export const Welcome = styled.div`
    font-size: 5em;
`
export const ProductName = styled.div` 
    font-size: 12em;
    margin-left: 100px; 
    `

    export const ImageContainer = styled.div` 
     
    `
    export const TextContainer = styled.div` 
    `


export const SiteHeading = (props) => {
    return (
        <Container>
            <TextContainer>
                <Welcome>
                    {props.welcomeText}
                </Welcome>
                <ProductName>
                    {props.productName}
                </ProductName>
            </TextContainer>
            <ImageContainer>
                <img style={{
                    width: '400px',
                    height: '600px',
                    
                }}src={require('./../images/image1.jpeg')} alt={'sliderImage1'}/>
            </ImageContainer>    
        </Container>
    );
}

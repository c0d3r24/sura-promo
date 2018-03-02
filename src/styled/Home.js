import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/media';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
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
                <Carousel 
                showThumbs={false}
                centerMode={true}
                showArrows={false}
                showIndicators={false}
                autoPlay={props.flag}
                interval= {3000}
                transitionTime={350}
                infiniteLoop={true}
                swipeable ={true}
                emulateTouch={true}
                axis="vertical"
                showStatus={false}
                width="400">
                    <div>
                        <img style={{
                            width: '400px',
                            height: '600px',  
                            }}src={require('./../images/image2.png')} alt={'sliderImage1'}/>
                        <p className="legend">Father's Love</p>
                    </div>
                    <div>
                        <img style={{
                            width: '400px',
                            height: '600px',  
                            }}src={require('./../images/image3.png')} alt={'sliderImage1'}/>
                         <p className="legend">Someone's childhood memory</p>
                    </div>
                    <div>
                        <img style={{
                            width: '400px',
                            height: '600px',  
                            }}src={require('./../images/image4.png')} alt={'sliderImage1'}/>
                         <p className="legend">Love never get old</p>
                    </div>
                    <div>
                        <img style={{
                            width: '400px',
                            height: '600px',  
                            }}src={require('./../images/image5.png')} alt={'sliderImage1'}/>
                         <p className="legend">Sisters for life</p>
                    </div>
                    <div>
                        <img style={{
                            width: '400px',
                            height: '600px',  
                            }}src={require('./../images/image6.png')} alt={'sliderImage1'}/>
                         <p className="legend">Mother and Son</p>
                    </div>
                    <div>
                        <img style={{
                            width: '400px',
                            height: '600px',  
                            }}src={require('./../images/image7.png')} alt={'sliderImage1'}/>
                         <p className="legend">Brave Kid</p>
                    </div>
                </Carousel>
            </ImageContainer>    
        </Container>
    );
}

import React from 'react';
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';
import Home from './image/Home.jpg';

function HeroSection(){
    return (
        <div className='hero-container' id='home'>
            <img src={Home} className='image'  alt='Home'/>
            <h1>Food Festival</h1>
            <p>what are you waiting for?</p>
            <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Enroll
            </Button>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}>
                More Details <i className='fas fa-utensils' />
            </Button>
            </div>
        </div>
    )
}

export default HeroSection
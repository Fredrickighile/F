import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vrid.mp4' autoPlay loop muted />
      <h1>DESIRE MEETS DESTINATION</h1>
      <p>What are you waiting for? Travel Today With FredVentures</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <PlayCircleOutlineIcon className='play-icon'/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
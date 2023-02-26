import logo from '../../Assets/homni-logo.png';
import './Home.css'
import React from 'react';
import '../../Style/Typograph.css'
import '../../Style/Color.css'
import LargeButton from '../Button/LargeButton';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
        <img src={logo} className='home-image'></img>
        <span className='primary1-color title-m' style={{textAlign: "center"}}>Stroke Detector User Study</span>
        <NavLink to='/task' style={{ textDecoration: 'none' }}>
            <LargeButton label="Start Test"/>
        </NavLink>
    </div>
  );
}

export default Home;

import logo from '../../Assets/complete-image.png';
import './Complete.css'
import React from 'react';
import '../../Style/Typograph.css'
import '../../Style/Color.css'
import LargeButton from '../Button/LargeButton';
import { NavLink } from 'react-router-dom';

const Compolete = () => {
  return (
    <div className="Complete">
        <img src={logo} className='complete-image'></img>
        <span className='primary1-color title-m'>Sutdy Completed!</span>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
            <LargeButton label="Go to homepge"/>
        </NavLink>
    </div>
  );
}

export default Compolete;

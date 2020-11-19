import "./PageHeader.css";
import React from "react";
import History from '../tools/History';
import logo from '../../assets/logo.png';
import userImg from '../../assets/user.png';

export default () => {
    return (
        <div className="header" >
            <div className='header__content'>
                <a className='header__titulo' href="" onClick={() => History.push('/')}><img src={logo} alt="logo" className='header__logo' />
                    <strong>  SQUAD MANAGEMENT TOOL</strong></a>
                <div className='header__box'>
                    <div className='header__box_container'>
                        <h3 className='header__box_user'>John Doe</h3>
                        <img src={userImg} alt="user-image" className='header__box_user_image' />
                    </div>
                </div>
            </div>
        </div>
    );
};

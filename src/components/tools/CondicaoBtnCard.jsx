import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import History from '../tools/History';

export default (props) => {
    //const cb = props.quandoClicar;
    const showButton = props.button === 'true';
    return <div className='Card__button_box'>{showButton ? 
    // <button className="Card__button" onClick={() => cb("view2")}>
    //     <FontAwesomeIcon  icon={faPlus}></FontAwesomeIcon></button> : "" }</div>;
    <a className="Card__button" href="" onClick={() => History.push('/Create')}>
         <FontAwesomeIcon  icon={faPlus}></FontAwesomeIcon></a> : "" }</div>;
};
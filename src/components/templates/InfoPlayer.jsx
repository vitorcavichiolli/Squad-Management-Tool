import React from 'react'
import "./InfoPlayer.css";

export default props => {
    return (
        <div className='playerInfo_box' key={props.id}>
            <div className='infoGroup'>
                <h3 className='lblInfo'>Name:</h3>
                <p className='txtInfo'>{props.name}</p>
            </div>
            <div className='infoGroup'>
                <h3 className='lblInfo'>Age:</h3>
                <p className='txtInfo'>{props.age}</p>
            </div>
            <div className='infoGroup'>
                <h3 className='lblInfo'>Nacionality:</h3>
                <p className='txtInfo'>{props.nac}</p>
            </div>



        </div>
    )
}
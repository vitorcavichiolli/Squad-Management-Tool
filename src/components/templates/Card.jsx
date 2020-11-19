import "./Card.css";
import React, {useState} from "react";
import CondicaoBtnCard from '../tools/CondicaoBtnCard'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#000',
        borderColor: props.color || '#000',
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Card__title">
                <h2 className='Card__title_text'>{props.titulo}</h2>
                <CondicaoBtnCard button={props.button} ></CondicaoBtnCard>
            </div>
            <div className="Card__content">
                {props.children}
            </div>
        </div>
    );
};

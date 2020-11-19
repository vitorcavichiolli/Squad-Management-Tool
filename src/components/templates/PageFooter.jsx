import "./PageFooter.css";
import React from "react";



export default () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer" >
            <div className='footer__content'>
                <p className='footer__content_text'>{year} - All rights reserved</p>
            </div>
        </div>
    );
};

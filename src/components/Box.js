import React from 'react';

const Box = () => {
    return (
        <div className='container'>
            <span id ="number" className='container--space container__advice_number container__advice_number--green container__advice_number--length'> ADVICE #117 </span>
            <p id ="advice" className='container--space container__advice container__advice--position container__advice--cyan'>
                "It is easy to sit up and take notice, what's difficult is getting up and taking action"
            </p>
            <picture>
                <source className='container--space container__divider' srcSet="./pattern-divider-desktop.svg" alt="nothing" media="(min-width:599px)"/>
                <img className="container--space container__divider" src='./pattern-divider-mobile.svg' alt = "A straight line" />
            </picture>
        </div>
    );
};

export default Box;
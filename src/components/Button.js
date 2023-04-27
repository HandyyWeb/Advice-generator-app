import React from 'react';


const Button = () => {

    return (
        <div>
            <button className="container__button" onClick={() => handleAdvice()}></button>
        </div>
    );
};

async function handleAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice")
    const JsonData = await response.json()
    document.getElementById("advice").innerHTML = JsonData.slip.advice
    document.getElementById("number").innerHTML = `ADVICE # ${JsonData.slip.id}`
}

export default Button;
import React from 'react';
import anime from 'animejs';

let loadingText = "Loading...".split("");

function onLoad(event){
    let {target} = event
    anime({
        targets: target,
        rotate: 720,
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 5000,
        loop: true,
        keyframes: [
            {translateX: '50px'},
            {translateX: '-50px'},
            {translateX: '25px'}
       
        ]
    })
}

function loopText(event){
    let {target} = event;
    anime({
        targets: target,
        fontSize: '4rem',
    })
}

export default function Loading(props){



    return (
        <div className="loading-box">
            <h2>
                {loadingText.map((item, index) => (
                <span onLoad={loopText} key={`${item}-${index}`} className="loading-text">{item}</span>
                ))}
            </h2>
            <img onLoad={onLoad} className =".weed-icon" src='http://localhost:3000/assets/weed_icon.png' alt='' style={{width: '100px'}}/>
        </div>
    )
}
import React, {useState} from '../../../node_modules/react';
import './Star.css'

const Star = (props) => {

    const maxStarSize = 4;
    const minStarSize = 1;
    const hoverRadius = 100;

    const getRandomInt = (max, min) => Math.floor(Math.random() * Math.floor(max)) + min;
    const mouseEnter   = () => setVis(true);
    const mouseLeave   = () => setTimeout(() => { setVis(false);}, 1000);

    const [vis, setVis] = useState(false);
    const [starParameter, setStarParameters] = useState(() =>{
        let size = getRandomInt(maxStarSize, minStarSize)
        let top = getRandomInt(props.window.height,0);
        return {
            windowH: props.window.height,
            windowW: props.window.width,
            size: size,
            hoverSize: size + hoverRadius,
            left: getRandomInt(props.window.width, 0),
            top:  top,
            opacity: (100 - ((top * 100) / props.window.height)) / 100
        }
    })



    let sClasses = ["bg-star-shadow"];
    let pClasses = ["bg-star"];
    if(vis){
        sClasses.push('fade-in-border')
        pClasses.push('fade-in-body')
    }

    let starStyle = {  
        height: starParameter.size + 'px',
        width: starParameter.size + 'px',
        marginTop:  starParameter.hoverRadius/2 + 'px',
        marginLeft: starParameter.hoverRadius/2 + 'px',
        opacity: starParameter.opacity
    }
    let parentStyle= {  
        height: starParameter.hoverSize + 'px',
        width: starParameter.hoverSize + 'px',
        left: starParameter.left + "px",
        top: starParameter.top + "px"
    }

    return ( 
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={parentStyle} className="bg-star-invisible-parent">
            <div style={starStyle} className={pClasses.join(' ')}></div>
            <div style={starStyle} className={sClasses.join(' ')}></div>
        </div>

    );
}

export default React.memo(Star);

import React, {useState} from '../../../node_modules/react';
import './Star.css'

const Star = (props) => {

    const [vis, setVis] = useState(false);

    const mouseEnter = () => {
        setVis(true);
    }

    const mouseLeave = () => {
        setTimeout(() => { //Start the timer
            setVis(false);
        }, 1000);
    }

    let sClasses = ["bg-star-shadow"];
    let pClasses = ["bg-star"];
    if(vis){
        sClasses.push('fade-in-border')
        pClasses.push('fade-in-body')
    }

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={props.parentStyle} className="bg-star-invisible-parent">
            <div style={props.starStyle} className={pClasses.join(' ')}></div>
            <div style={props.starStyle} className={sClasses.join(' ')}></div>
        </div>

    );
}

export default Star;

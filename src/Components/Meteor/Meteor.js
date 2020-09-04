import React, {useState} from 'react';

const Meteor = (props) => {

    //invisible by default
    //on creation kicks off a random time 
    //at the end of the timer
        //make visible at random position
        //animate in and out
        //once animation comeplte and no longer visible
        //kick off time again    


    const [vis, setVis] = useState(false);

    // let sClasses = ["bg-star-shadow"];
    // let pClasses = ["bg-star"];
    // if(vis){
    //     sClasses.push('fade-in-border')
    //     pClasses.push('fade-in-body')
    // }

    let style = {
        top: 0 + "px",
        left: 0 + "px"
    }

    return (
        <div style={style}>
            meteor
        </div>
    );
}

export default Meteor;

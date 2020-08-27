import React, {Component}  from 'react';
import Star from '../Star/Star';
import '../Starmap/Starmap.css';

class starmap extends Component {

    constructor() {
        super();
        let stars = this.populateStarMap();
        this.state = { stars:[...stars] }; 
    }

    maxStarSize = 7;
    minStarSize = 2;
    population = 100; 
    fadespeed = 1;
    width=  1500;
    height= 1000;

    getRandomInt(max, min) {
        return Math.floor(Math.random() * Math.floor(max)) + min;
    }

    populateStarMap = () => {
        let stars = [Array.from({ length: this.population }, (_, k) => {
            let size = this.getRandomInt(this.maxStarSize, this.minStarSize);
            let left = this.getRandomInt(this.width , 0);
            let top  = this.getRandomInt(this.height, 0);
            let opacity = (100 - ((top * 100) / this.height)) / 100;

            let style = {  
                height: size + 'px',
                width: size + 'px',
                left: left + 'px',
                top: top + 'px',
                opacity: opacity
            }
            console.log(style);
            return (<Star key={k} styleProp={style}></Star>);
        })]
        return stars;
    }

    render() {
        return <div className="star-map">

        {this.state.stars.map((star) => {
          return star
        })}
        </div>;
    }
}

export default starmap;

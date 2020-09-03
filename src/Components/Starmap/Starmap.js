import React, {Component}  from 'react';
import Star from '../Star/Star';
import '../Starmap/Starmap.css';

class starmap extends Component {

    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth-this.padding, 
                       windowHeight: window.innerHeight-this.padding};
      }

    maxStarSize = 4;
    minStarSize = 1;
    hoverRadius = 100;
    padding = (this.hoverRadius) +5;
    grain = 0.0007;
    
    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth-this.padding, windowHeight: window.innerHeight-this.padding});
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    } 

    getRandomInt(max, min) {
        return Math.floor(Math.random() * Math.floor(max)) + min;
    }

    getPopulation () {
        return  Math.round(this.state.windowHeight * this.state.windowHeight * this.grain)
    }

    populateStarMap = () => {

        let population = this.getPopulation();
        let stars = [Array.from({ length: population}, (_, k) => {
            let size = this.getRandomInt(this.maxStarSize, this.minStarSize);
            let hoverSize = size + this.hoverRadius;
            let left = this.getRandomInt(this.state.windowWidth,0 );
            let top  = this.getRandomInt(this.state.windowHeight,0);
            let opacity = (100 - ((top * 100) / this.state.windowHeight)) / 100;

            let starStyle = {  
                height: size + 'px',
                width: size + 'px',
                marginTop:  this.hoverRadius/2 + 'px',
                marginLeft: this.hoverRadius/2 + 'px',
                opacity: opacity
            }
            let parentStyle= {  
                height: hoverSize + 'px',
                width: hoverSize + 'px',
                left: left + 'px',
                top: top + 'px',
            }
            return (<Star key={k} starStyle={starStyle} parentStyle={parentStyle} ></Star>);
        })]
        return stars;
    }

    render() {
        let stars = this.populateStarMap();

        return <div className="star-map">
            {stars.map((star) => {
                return star
            })}
        </div>;
    }
}

export default starmap;

import React, {Component}  from 'react';
import Star from '../Star/Star';
import '../Starmap/Starmap.css';

class starmap extends Component {

    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth, 
                       windowHeight: window.document.body.offsetHeight,
                       population: this.getPopulation(window.document.body.offsetHeight, window.innerWidth)
                     };

        console.log(window.document.body.offsetHeight);
      }
    
    handleResize = (e) => {
        let h = window.document.body.offsetHeight;
        let w = window.innerWidth
        console.log(h);

        let newPopulation = this.getPopulation(h,w);
        if(this.state.population > newPopulation)
            newPopulation = this.state.population;

        this.setState({ windowWidth: w, windowHeight: h, population: newPopulation});
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }

    getPopulation (h,w) {
        let grain = 0.0004;
        return Math.round(h * w * grain)
    }

    populateStarMap = () => {

        let population =  this.state.population;

        let window = {  
            height: this.state.windowHeight,
            width: this.state.windowWidth
        }

        return [Array.from({ length: population}, (_, k) => <Star key={k} window={window}></Star>)] 
    }

    render() {
        let style={
            height: this.state.windowHeight
        }
        let stars = this.populateStarMap();
        return <div className="star-map" style={style}>
                    {stars.map((star) => {
                        return star
                    })}
               </div>;
    }
}

export default starmap;

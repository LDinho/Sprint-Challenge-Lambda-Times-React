import React, { Component } from 'react';
import { carouselData } from '../../data'

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      index: 0,
    }
  }

  componentDidMount(){
    this.setState({
      carousel: carouselData,
    })
  }

  leftClick = () => {
    this.setState({
      index: this.state.index - 1,
    })
  }

  rightClick = () => {
    this.setState({
      index: this.state.index + 1,
    })
  }

  selectedImage = () => {
    return <img src={''} style={{display: 'block'}} />
  }

  render(){
    // const {carousel} = this.state;

    return (
      <div className="carousel">
        <img src="./assets/carousel/mountains.jpeg" style={{display: 'block'}}/>
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { carouselData } from '../../data'

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      // carousel: [], //if this changes, then initiate array state on carousel,
      //but in this case we access our data locally, so this is not needed
      currentImageIndex: 0,
    }
  }

  // componentDidMount(){ // This is useful if my carousel data changes
  //   this.setState({
  //     carousel: carouselData,
  //   })
  // }

  leftClick = () => {
    const {currentImageIndex} = this.state;

    if (currentImageIndex === 0) {
      this.setState({
        currentImageIndex: carouselData.length - 1
      })
    } else {

      this.setState({
        currentImageIndex: this.state.currentImageIndex - 1
      });
    }
  }

  rightClick = () => {
    const {currentImageIndex} = this.state;

    if (currentImageIndex === carouselData.length - 1) {
      this.setState({
        currentImageIndex: 0,
      })
    } else {

      this.setState({
        currentImageIndex: this.state.currentImageIndex + 1,
      })
    }
  }

  selectedImage = () => {
    const imagePath = carouselData[this.state.currentImageIndex];

    return <img src={imagePath} style={{display: 'block'}} alt="sample" />
  }

  render(){
    const selectedImage = this.selectedImage();

    return (
      <div className="carousel">
        {selectedImage}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

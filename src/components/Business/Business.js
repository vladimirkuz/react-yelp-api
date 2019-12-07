import React from 'react';
import './Business.css';

class Business extends React.Component {

  render() {
    try{
    return (
      <div className="Business">
  <div className="image-container">
    <img src={this.props.business.imageSrc} alt=''/>
  </div>
  <h2>{this.props.business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.props.business.address}</p>
      <p>{this.props.business.city}</p>
      <p>{this.props.business.state} {this.props.business.zipCode}</p>
    </div>
    <div className="Business-reviews">

      <p>{this.props.business.category}</p>

      <p className="rating">{this.props.business.rating} stars</p>
      <p>{this.props.business.reviewCount} reviews</p>
    </div>
  </div>
</div>
    )
  }catch(e){
    return <p>Error!</p>;
  }
  }
}

export default Business;

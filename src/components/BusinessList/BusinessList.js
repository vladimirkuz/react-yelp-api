import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';


class BusinessList extends React.Component {
  render () {
    try{
    return (
      <div className="BusinessList">
      
        {this.props.businesses.map(business => {
          return <Business key={business.id} business={business}/>;
        })}
      </div>
    )
  }catch(e){
    console.log(e);
    return <h1> Something went wrong! </h1>
  }
  }
};

export default BusinessList;

import React from 'react';
//import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/yelp';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    businesses: []
  }
  this.searchYelp = this.searchYelp.bind(this);
}

//updates businesses state with yelp object
searchYelp(term, location, sortBy) {
    try{
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
    })
  }catch(e){
    console.log(e);
  }

};

render() {
  return (
    <div className="App">
    <h1><a href='https://www.vladcancode.com'>vladcancode.com</a></h1>
    <SearchBar searchYelp={this.searchYelp}/>
    <BusinessList businesses={this.state.businesses}/>
    </div>
  );
}

}

export default App;

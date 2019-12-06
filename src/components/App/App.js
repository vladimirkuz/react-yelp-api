import React from 'react';
//import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
};

const businesses = [business, business, business, business, business, business];

class App extends React.Component {
render() {
  return (
    <div class="App">
    <h1>vladcancode.com</h1>
    <SearchBar/>
    <BusinessList businesses={businesses}/>
    </div>
  );
}

}

export default App;

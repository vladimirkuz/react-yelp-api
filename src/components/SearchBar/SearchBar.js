import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    //three types of sort option - future proof
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  };

  //dtermines if sort by option is active
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active'
    }else{
      return ''
    }
  };


  //updates term state from input entry
  handleTermChange(event) {
    this.setState({term: event.target.value});
  };


//updates location state from input entry
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  };

  //updates search by option
  handleSortByChange(sortByOption, event) {
    this.setState({sortBy: sortByOption});
    if (this.state.term && this.state.location){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }
  };

//calls yelp api
    handleSearch(event) {
      //should only return search if term and location entered
      if (this.state.term && this.state.location){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }
      //prevent default action from clicking a link
      event.preventDefault();
    };


  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      //bind to the current value of this and also bind the current sortByOptionValue as the first argument to the method call, ensuring the method is called with the appropriate value when clicked
      return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
    })
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>

        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>

        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} href='www.#.com'>Search</a>
        </div>
      </div>
    )
  }
};

export default SearchBar;

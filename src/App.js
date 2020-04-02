import React, { Component } from 'react';
import { Card } from './card-list/Card.component';
import { Search } from './search/search.component';
import './App.scss';

class App extends Component {
  constructor() {
    super();
      this.state = {
        users: [],
        search: '',
        recipes: [{
            name: 'Spinach delice',
            id: 1
          },
          {
            name: 'Vitamin C & Protein Power Salad',
            id: 2
          },
          {
            name: 'Honey matcha bites',
            id: 3
          }
        ]
      }
    // not efficient because we don't want to set the 
    //  context of this each time we write a new function
    // this.textSearch = this.textSearch.bind(this);
  }
  
    // better use arrow functions, because it allows us set the context of this where the method has been declared
    //  how it does that? because it is lexicaly scoped
    textSearch = e => {
      this.setState({
        search: e.target.value
      })
    }
  
    componentDidMount() {
      // 1. using fetch browser method I make a call to the api and fetch returns a promise
      // 2.  in order to make it javascript readable we need to transform that response in a json format:
      // 3.
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => this.setState({ users: res }, () => console.log()));
    }
  

  
  render() {
    // let reduced = this.state.users;
    // console.log(reduced);
    const pers = this.state.users;
    const searchfield = this.state.search;



    const filtered = pers.filter(res => res.title.toLowerCase().includes(searchfield.toLowerCase()));
    console.log(filtered);
    return (
      <section className="section">
        <div className="container">
          <div className="d-flex">
            <h1> Art Gallery </h1>
            <Search placeholder="Search" handleChange={this.textSearch}></Search>
          </div>
          <Card lists={filtered} />
        </div>
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';

import GuestPhoneBook from './components/GuestPhoneBook/GuestPhoneBook.js'
class App  extends Component {
  state = {  }
  render() { 
    return (  
      <div className="App">
      <GuestPhoneBook/>
      </div>
    );
  }
}
 
//This is the base page at which all exports meet and we see content on the web page

export default App;

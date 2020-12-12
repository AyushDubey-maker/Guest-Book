import React, { Component } from 'react';
import './GuestPhoneBook.css'
import GuestList from "./GuestList/GuestList"

class GuestPhoneBook extends Component {
    state = {  }
    render() { 
        return (
            <div className="GuestPhoneBook">
                <h1>GuestPhoneBook</h1>
               <GuestList/>
            </div>
          );
    }
}
 
export default GuestPhoneBook ;

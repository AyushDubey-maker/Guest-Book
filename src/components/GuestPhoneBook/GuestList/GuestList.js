import React, { Component } from "react";

const Guest =(props)=>{
   
    return(
      
      
         <tr>
         <td>{props.user.firstName}</td>
         <td>{props.user.lastName}</td>
         <td>{props.user.age}</td>
         <td><button className="danger" onClick={()=>{
             props.onDeleteGuest(props.id)
        }}>DELETE</button></td>
     </tr>
    
    )
}
class AddGuest extends Component {
    state = {  
        firstName:"",
        lastName:"",
        age:""
    }
    onChangeFirstName=(e)=>{
        this.setState({firstName:e.target.value})
    }
    onChangeLastName=(e)=>{
        this.setState({lastName:e.target.value})
    }
    onChangeAge=(e)=>{
        this.setState({age:e.target.value})
    }
    render() { 
        return ( 
            <div className="add-user">
                First Name:<input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} ></input>
                Last Name:<input type="text" value={this.state.lastName} onChange={this.onChangeLastName} ></input>
                Contact:<input type="number" value={this.state.age} onChange={this.onChangeAge} ></input>
             <button className="green-btn" onClick={()=>this.props.onAddGuest(this.state)}>Add User</button>
            </div>
         );
    }
}
 

class GuestList extends Component {
  state = {
    guestUsersList:[{
       firstName:'Ayush',
       lastName:'Dubey',
       age:181222333
    },
    {
        firstName:'Alexa',
        lastName:'Peter',
        age:123222122
     }
]
  }
  onDeleteGuest=(id)=>{
      const {guestUsersList}=this.state
      guestUsersList.splice(id,1)
      this.setState({guestUsersList:guestUsersList})
      console.log(guestUsersList)
  }
  onAddGuest=(guestData)=>{
      const newGuest=guestData;
      const {guestUsersList}=this.state;
      guestUsersList.unshift(newGuest)
      this.setState({guestUsersList})
  }
  render() {
    return (
      <div className="GuestList">
          <h1>Add User</h1>
          <AddGuest onAddGuest={this.onAddGuest}/>
          <br/>
          <hr/>
          <br/>
        <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
            <th>Delete User</th>
        </tr>
        {this.state.guestUsersList.map((user,id)=>{
            return <Guest user={user} id={id} onDeleteGuest={this.onDeleteGuest}/>
        })}
     
       </table>
      </div>
    );
  }
}

export default GuestList;

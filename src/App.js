import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import ActiveUser from './components/active-user.js';
import Header from './components/header.js';
import UserTable from './components/userTable.js';


export default class App extends Component {

  constructor(props){
    super(props);

    this.initialState = {
      data: data,
      active: 0
    }

    this.state = {
      data: data,
      active: 0
    }

    this.upload = this.upload.bind(this);
    
  }  

  upload(config){
    this.setState(config);
  }

  render() {
    return (
      <div className="App">
        < Header upload = {this.upload} data = {this.initialState.data} initialState = {this.initialState}/>
        <div className = "data">
          < ActiveUser user = {this.initialState.data.find((user)=>{return user.id === this.state.active})} />
          < UserTable upload = {this.upload} data = {this.state.data}/>               
        </div>
      </div>
    );
  }
}



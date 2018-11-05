import React from 'react';
import './userItem.css';

export default class UserItem extends React.Component{
	constructor(props){
		super(props); 
	}

	render(){
		const user = this.props.user;
		return(
			<tr className = "userItem" onClick={(e)=> this.props.upload({ active: user.id })}>
				<td className ="avatar"> <img src={user.image}></img> </td>
				<td> {user.name} </td>
				<td> {user.age} </td>
				<td> {user.phone} </td>
			</tr>
		)
	}
}
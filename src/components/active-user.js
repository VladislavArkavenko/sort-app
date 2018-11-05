import React from 'react';
import './active-user.css';

export default class ActiveUser extends React.Component{
	constructor(props){
		super(props); 
	}

	render(){
		const user = this.props.user;		
		return(
			<div className = "activeUser">
				<div className ="photo"> <img src={user.image}></img> </div>
				<h1 className="name">{user.name}</h1>
				<table>
					<tbody>
						<tr>
							<td> Age: </td>
							<td> {user.age} </td>
						</tr>
						<tr>
							<td> Phone: </td>
							<td> {user.phone} </td>
						</tr>
						<tr>
							<td> Birthday: </td>
							<td> {user.birthday} </td>
						</tr>
					</tbody>
				</table>
				<p className="phrase"> <span>Favorite phrase :</span> {user.phrase} </p>	
			</div>
		)
	}
}
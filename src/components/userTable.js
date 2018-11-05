import React from 'react';
import './userTable.css';
import UserItem from './userItem.js';

export default class UserTable extends React.Component {

	constructor(props){
    	super(props);
	}

	render() {
    	return (
    		<div className="allUsers">
    			<table>
            		<thead>
                  <tr>
              			<th> Image </th>
              			<th> Name </th>
              			<th> Age </th>
              			<th> Phone </th>
                  </tr>
            		</thead>
            		<tbody>
              			{
               				this.props.data.map((user)=>{
                  				return < UserItem user={user} key={user.id} id={user.id} upload = {this.props.upload} />
               				})
              			}
            		</tbody>
          	</table>
          </div>
    	)
	}
}
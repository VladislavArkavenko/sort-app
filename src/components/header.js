import React from 'react';
import './header.css';

export default class Header extends React.Component{
	constructor(props){
		super(props); 

		this.state = {value: ''};

		this.sort = this.sort.bind(this);
		this.reset = this.reset.bind(this);
		this.dataSearch = this.dataSearch.bind(this);
	}	

	sort(type){
		let data = this.props.data;
		let upload = this.props.upload;
		let newData;		
		if(type === "name"){
			newData = [].slice.call(data).sort((a,b)=>{
				let x = a.name.toLowerCase() 
				let y = b.name.toLowerCase()
				if (x < y)
 					return -1;
 				if (x > y)
  					return 1;
 				return 0;	
			});
		} else {
			newData = [].slice.call(data).sort((a,b)=>{
				let x = a.age; 
				let y = b.age;
				if (x < y)
 					return -1;
 				if (x > y)
  					return 1;
 				return 0;	
			});
		}
		upload({data: newData});
	}

	reset(){
		this.props.upload(this.props.initialState);
	}

	dataSearch(e){

		this.setState({value: e.target.value});
		let value = e.target.value.toLowerCase();

		let filter = this.props.data.filter(user => { return user.name.toLowerCase().includes(value)})

		console.log(filter);

		this.props.upload({data: filter, active: 0});
	}

	render(){		
		return(
			< header >
				<div className = "row">
					<input className = "header_input" placeholder="Search people by name..." onChange = {(e)=>{this.dataSearch(e)}} value = {this.state.value} />
				</div>
				<div className = "row">
					<div className = "allButtons">
						<button onClick={()=>{this.sort("name")}}> <i className="fa fa-sort-alpha-asc" ></i> Sort by name </button>
						<button onClick={()=>{this.sort("age")}}> <i className="fa fa-sort-numeric-desc"></i> Sort by age </button>
						<button onClick={()=>{this.reset()}}> <i className="fa fa-ban"></i> Reset </button> 
					</div>
				</div>
			</header>
			

		)
	}
}
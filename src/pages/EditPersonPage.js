import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import queryString from 'query-string';


import Button from "react-bootstrap/Button";


export default class EditPerson extends React.Component {

    constructor(props) {

      super(props);
      this.state = {id: '', name: '', email: '', age: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
    
	// Used for React Hooks
    //const search = window.location.search;
    //const params = new URLSearchParams(search);
    //const foo = params.get('id'); 
	
	const value = queryString.parse(this.props.location.search);
    const urlid = value.id;
       	
	fetch('https://phpapi.persteenolsen.dk/api/single_read.php?id=' + urlid )
	
   .then(response => {
     return response.json();
    }).then(result => {

    // console.log(result);
     this.setState({
      id:result.id,
      name:result.name,
      email:result.email,
      age:result.age
     });
    });

    }


    handleChange(event) {
     const state = this.state
     state[event.target.name] = event.target.value
     this.setState(state);
    }


    handleSubmit(event) {
		
     event.preventDefault();

	 fetch('https://phpapi.persteenolsen.dk/api/update.php' , {
	  
     method: 'POST',
     body: JSON.stringify({
         id:this.state.id,
         name: this.state.name,
         email: this.state.email,
         age: this.state.age
     }),
     headers: {
         "Content-type": "application/json; charset=UTF-8"
     }
    }).then(response => {
	  
	 // alert( response.status );

      // If the New Person was create the server will responde with 200
      if( response.status === 200 ) 
        alert("The Person was updated successfully " );
      
	  // If the user input failes in the server validation!
	   if( response.status === 205 ) 
          alert("205 Reset Content - You entered wrong values!");
	  
	  // Most likely the 401 will be handled here and not in catch by cors-policy like update and create!
	  if( response.status === 401 ) 
          alert("401 unauthorized - Edit, delete and create are disabled because this is a demo!");
	      
	   // React: The user is redirected to the admin list of Persons using withRouter from react-router-dom
	   this.props.history.push("/listpersons");
		
     }).catch( error => {
        alert("Status 401 unauthorized - Delete, edit and create are disabled because this is a demo!");
	 });
		 
    }
    
    render() {
      return (
     <div id="container">
          
		<br/>
		
		<Link to="/listpersons">View the list of Persons</Link>        
		
		<br/> <br/>

        <form onSubmit={this.handleSubmit}>

           <table className="react-table-edit">
            
            <tr>
             <td colSpan="2">
                 <input type="hidden" name="id" value={this.state.id}/>
              </td>
            </tr>

            <tr>
              <td>
                 <label>Name:</label>
             </td>
            
             <td>
               <input className="react-input-text" type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Length 2 to 15 letters" />
             </td>
           </tr>

           <tr>
              <td>
             <label>Email:</label>
             </td>
             
             <td>
             <input className="react-input-text" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="xxx@yyy.com - 8 to 15 letters" />
             </td>
           </tr>
            
           <tr>
              <td>
              <label>Age:</label>
              </td>
             
             <td>
             <input className="react-input-text" type="text" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Number from 18 to 125" />
             </td>
           </tr>

           <tr>
              <td colSpan="2">			 
			 
			  <Button variant="outline-primary" type="submit">Submit</Button>{' '}
			  
             </td>
           </tr>
          </table>

        </form>
        </div>
      );
    }
  }

  
  
  
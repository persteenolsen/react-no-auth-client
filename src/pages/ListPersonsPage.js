import React from 'react'

import { Link, withRouter } from 'react-router-dom'

import Button from "react-bootstrap/Button";


export default class GetPersonsList extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            persons: []

        };

    }

    componentDidMount() {
       
        this.getPersons();
		
    }
	
   
    getPersons(){
        
		 
		 fetch('https://phpapi.persteenolsen.dk/api/read.php')
		.then( response => response.json() )
		
        .then( data => { this.setState({ persons: data }) })
		
		
		 

    }
    
 editPerson(idedit){
        
     // JavaScript: The user is redirected to the Person EDIT form
     //window.location.href = "/editperson?id=" + idedit;
	 
	 // React: The user is redirected to the admin list of Persons using withRouter from react-router-dom
	this.props.history.push("/editperson?id=" + idedit );
}

deletePerson(id)  {

  if(window.confirm("Are you sure want to delete the Person?")) {
      
	fetch('https://phpapi.persteenolsen.dk/api/delete.php', {
	  
     method: 'POST',
     body: JSON.stringify({
         id:id
     }),
     headers: {
         "Content-type": "application/json; charset=UTF-8"
     }	 
		
      }).then(response => { 
              
			  // alert("Statuscode: " + response.status );
			   
              // On Success the server will most likely return 204 because no content to return
              if( response.status === 200  || response.status === 202 ){
                  alert("The Person was deleted successfully");
                  
                 // NOTE: Reload / update the cached version (false) of the page !!
                 // window.location.reload(false);
               
                 // Getting the Persons and update the state / GUI
                 this.getPersons();
			  } 
               
			 // Most likely the 401 will be handled here and not in catch by cors-policy like update and create!
			 if( response.status === 401 ) 
                 alert("401 unauthorized - Delete, edit and create are disabled because this is a demo!");
	        	 
     }).catch( error => {
		  alert("Status 401 unauthorized - Delete, edit and create are disabled because this is a demo!");
	 });
	 
	 // Getting the Persons and update the state / GUI
     //this.getPersons();
                
    }
      
  }


    render() {
				
      return(
        
		<div>
               
        <br/>	 
       	 <Link to="/createperson">Create a new Person</Link>
        <br/> <br/>

         <table id="persons" className="table table-striped">
          <thead>
           
          <tr><td><b>Name</b></td><td><b>Email</b></td><td><b>Age</b></td><td></td></tr>
                                    
          </thead>
          <tbody>
            {
              this.state.persons.map(function(persons,index) {
                 return <tr key={index} >
                         
                                          
                  <td>{persons.name}</td>
                  <td>{persons.email}</td>
                  <td>{persons.age}</td>

            
                  <td>
				  
				   <Button variant="outline-warning" onClick={this.editPerson.bind(this, persons.id)}>Edit</Button>{' '}
				   <Button variant="outline-danger" onClick={this.deletePerson.bind(this, persons.id)}>Delete</Button>{' '}
                                    
                 </td>
                 

               </tr>

              }.bind(this))
			  
			
            }
            
          </tbody>
        </table>
        </div>

      )
    } 

}

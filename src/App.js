

import React, { useState } from 'react';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './pages/HomePage'
import GetPersonsList from './pages/ListPersonsPage'
import CreatePerson from './pages/CreatePersonPage'
import EditPerson from './pages/EditPersonPage'
import About from './pages/AboutPage'



import ErrorPage from './pages/ErrorPage';

import 'bootstrap/dist/css/bootstrap.css';

import "./style.css";




function App() {
	
 const [expanded, setExpanded] = useState(false);
	
  	
  return (<Router>
  
    <div>
      <header>
        
		<Navbar expanded={expanded} variant="dark" bg="dark" expand="lg">
          
		   
		  <Navbar.Brand href="#home">&nbsp;</Navbar.Brand>
		  
		  		  
           <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
            
			 <Navbar.Collapse id="basic-navbar-nav">
           
		       <Nav className="mr-auto">
			   			           		 
                
				<Link onClick={() => setTimeout(() => {setExpanded(false)}, 250)} to="/">Home
				
				</Link>
				
				<Link onClick={() => setTimeout(() => {setExpanded(false)}, 250)} to="/listpersons">List of Persons

				</Link>
				
				<Link onClick={() => setTimeout(() => {setExpanded(false)}, 250)} to="/createperson">Create a new Person

				</Link>
		               
		      </Nav>
   
           </Navbar.Collapse>
		
      </Navbar>

     </header>

	  
	  
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
			  
			  
                <Route exact path="/" component={About} />
				
                <Route exact path="/listpersons" component={GetPersonsList} />
	            <Route exact path="/createperson" component={CreatePerson} />
	            <Route exact path="/editperson" component={EditPerson} />
				
				
				<Route path="*" component={ErrorPage} />
	  
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;

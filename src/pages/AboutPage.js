import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="container">
      
	  <br/>
      <p>
       
	   
  <div class="nodeview">

   This Single Page Application ( SPA ) is made as a React Client and a PHP Web API using:
   <br/> <br/>
   
   <ul>
       
	   <li>"Create React App" was used for creating the structure of the project and the Webpack configuration</li>
       <li>React, HTML, CSS, JavaScript ES5 and ES6</li>
       <li>React Bootstrap implemented by NPM for the responsive design</li>
	   <li>React BrowserRouter for navigation</li>
	   <li>Secured by CORS to make sure that the Web API only get requests from the client url defined by CORS</li>
	   <li>HTTPS for encrypting the connection</li>
	   <li>Sanitizing form input to help prevent user enter HTML</li>
	   <li>Backend validation to make sure only valid input is stored in the DB</li>
   </ul>

   <ul>
       <li>A PHP 7.2 Web API</li>
      
   </ul>

   
   <ul>
       <li>MySQL as the database</li>
       <li>A traditional webhotel </li>
   </ul>

   <ul>
       <li>Visual Studio Code as Text Editor</li>
    </ul>

  </div>

	   
      </p>
    </div>
  )
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import App from './App.js';
import {BrowserRouter as  Router, Route, Link ,Switch} from 'react-router-dom';
import Comments from './Comments.js';



class Login extends React.Component {
render() {
    return(
    <>
      <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Apps</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/timer">Okay</Nav.Link> 
      <Nav.Link as={Link} to="/com">Comments</Nav.Link>
    </Nav>
  </Navbar>
<Switch>
          <Route path="/timer">
            <App />
          </Route>
          <Route path="/com">
            <Comments />
          </Route>
          </Switch>
</Router>
  
  </>
  );
    
  }

}

export default Login;


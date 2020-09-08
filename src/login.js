import React from 'react';
import './Comments.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, Button, Row, Col} from 'react-bootstrap';
import App from './App.js';
import {BrowserRouter as  Router, Route, Link ,Switch} from 'react-router-dom';
import Comments from './Comments.js';


function Home(){
    return(
      <>
      <h1>Welcome to My react Apps</h1>
    <div id = 'login'>    
    <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={4}>
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={4}>
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 4 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 4 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
   </div>
   </>

    );

}


class Login extends React.Component {
render() {
    return(
    <>
      <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">Home/Login</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/timer">Timer</Nav.Link> 
      <Nav.Link as={Link} to="/com">Comments</Nav.Link>
    </Nav>
  </Navbar>
<Switch>
    <Route exact path="/">
            <Home />
          </Route>
         <Route exact path="/timer">
            <App />
          </Route>
          <Route exact path="/com">
            <Comments />
          </Route>
          </Switch>
</Router>
  
  </>
  );
    
  }

}

export default Login;


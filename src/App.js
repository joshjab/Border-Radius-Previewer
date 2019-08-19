import React from 'react';
import { Navbar, Container, Row, Card, Col } from "react-bootstrap";
import Center from 'react-center';
import './App.css';

function App() {
  return (
  <div className="app">
      <Navbar fluid bg="dark" variant="dark">
	<Navbar.Brand href="/">Home</Navbar.Brand>
      </Navbar>
      <br />
      <Center>
        <Card style={{ width: '25rem' }}>
	  <Container>
	    <Row>
	      <Col className="text-left">1</Col>
              <Col className="text-right">2</Col>
	    </Row>
    	  </Container>
	  <h1 id="rounded-box">Your content here</h1>
	  <Container>
            <Row>
              <Col className="text-left">3</Col>
              <Col className="text-right">4</Col>
            </Row>
          </Container>
	  <Card.Text style={{ textAlign: 'center', padding: '10px' }}>Change the sliders below to change the borders!</Card.Text>
        </Card>
      </Center>
      <Container>
	<Row>
	  
	</Row>
      </Container>
   </div>
  );
}

export default App;

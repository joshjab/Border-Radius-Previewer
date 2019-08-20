import React, { Component } from 'react';
import { Navbar, Container, Row, Card, Col } from "react-bootstrap";
import Center from 'react-center';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side1: '40',
      side2: '40',
      side3: '40',
      side4: '40'
    };
    this.handleChangeS1 = this.handleChangeS1.bind(this);
    this.handleChangeS2 = this.handleChangeS2.bind(this);
    this.handleChangeS3 = this.handleChangeS3.bind(this);
    this.handleChangeS4 = this.handleChangeS4.bind(this);
  }
  render() { 
  return (
  <div className="app">
      <Navbar fluid bg="dark" variant="dark">
	<Navbar.Brand href="/">
	  <img
	    alt=""
	    src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
           />
           {'Home'}
	</Navbar.Brand>
      </Navbar>
      <br />
      <Center>
        <Card style={{ width: '25rem' }}>
	  <Container>
	    <Row>
	      <Col className="text-left">
		<input style={{ width: '3rem' }} type="text" name="s1" value={this.state.side1} onChange={this.handleChangeS1} />
	      </Col>
              <Col className="text-right">
		<input style={{ width: '3rem' }} type="text" name="s2" value={this.state.side2} onChange={this.handleChangeS2} />
              </Col>
	    </Row>
    	  </Container>
	  <h1 name="rounded-box" id="rounded-box">Your content here</h1>
	  <Container>
            <Row>
              <Col className="text-left">
		<input style={{ width: '3rem' }} type="text" name="s3" value={this.state.side3} onChange={this.handleChangeS3}/>
	      </Col>
              <Col className="text-right">
		<input style={{ width: '3rem' }} type="text" name="s4" value={this.state.side4} onChange={this.handleChangeS4} />
	      </Col>
            </Row>
          </Container>
	  <Card.Text style={{ textAlign: 'center', padding: '10px' }}>Change the sliders below to change the borders!</Card.Text>
        </Card>
      </Center>
      <br />
      <Container>	  
	<Center>
	  <textarea id="css-out" type="text" className="cssbox" />
	</Center>
      </Container>
   </div>
  );
}
handleChangeS1(event) {
    this.setState({
	side1: event.target.value	
    });
    var s1 = event.target.value;
    document.getElementById("rounded-box").style.borderTopLeftRadius = (s1 + '% ');
    document.getElementById("css-out").value = window.getComputedStyle(document.getElementById("rounded-box"));
}

handleChangeS2(event) {
    this.setState({
	side2: event.target.value	
    });
    var s2 = event.target.value;
    document.getElementById("rounded-box").style.borderTopRightRadius = (s2 + '% ');
}

handleChangeS3(event) {
    this.setState({
	side3: event.target.value	
    });
    var s3 = event.target.value;
    document.getElementById("rounded-box").style.borderBottomLeftRadius = (s3 + '% ');
}

handleChangeS4(event) {
    this.setState({
	side4: event.target.value	
    });
    var s4 = event.target.value;
    document.getElementById("rounded-box").style.borderBottomRightRadius = (s4 + '% ');
}}

export default App;

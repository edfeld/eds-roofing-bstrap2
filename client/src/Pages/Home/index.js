// Home Page
import React, { Component } from 'react';
import { Col, Card, Form, Button, Row } from 'react-bootstrap'
import SlideshowFade from '../../Components/SlideShow/SlideShowFade';
import axios from 'axios'
import './style.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      content: '',
      senderName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
    })
    // console.log("HandleChange: ", this.state);
  }
   
  handleSubmit(event){
    console.log("HandleSubmit=====>: ", this.state)
    event.preventDefault();
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const message = document.getElementById('message').value;
    axios
      .post('/send', {
            name: this.state.senderName,   
            email: this.state.email,  
            message: this.state.content
        
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }

  resetForm(){
    document.getElementById('contact-form').reset();
  }

// function Home() {

  render() {
    return (
    <div className='top-div'>
      <SlideshowFade />
      <div className="home-outer">
        <div className="home-inner">
        <Row>
          <div className="ml-3 two-column panel-img float-left">
            <img className='home-image' src="https://via.placeholder.com/475x277.png" alt='Our Team'/>
            </div> {/* row */}
          <div className='two-column card-one float-left'>
          <div id="about-usdiv">
            <h2>About Us</h2>
              <p id='about-us'>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon
              starboard grog black jack gangway rutters.
              Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a
              spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry
              doubloon chase. </p>
            </div> {/*  */}
          </div>
        </Row>
          <h1 className="our-services">Our services</h1>
          {/* <CardDeck>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/100.png?text=267X160" />
              <Card.Body>
                <Card.Title>Commercial & Industrial Roofing</Card.Title>
                <Card.Text>
                Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/100.png?text=267X160" />
              <Card.Body>
                <Card.Title>Roof Replacement & Repair</Card.Title>
                <Card.Text>
                  Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.{' '}
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/100.png?text=267X160" />
              <Card.Body>
                <Card.Title>Gutter Replacement & Repair</Card.Title>
                <Card.Text>
                Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.
                </Card.Text>
              </Card.Body>
             
            </Card>
          </CardDeck> */}
          {/* <h1>Card Columns</h1> */}
          <div id="our-services">
          <Row className="home-row-2">
          {/* <CardColumns> */}
          <Col className="" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card>
              <Card.Img className="p-4" variant="top" src="./images/Roof-Replacement.Repair.jpg" />
              <Card.Body>
                <Card.Title>Commercial & Industrial Roofing</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card>
              <Card.Img className="p-4" style={{width:"267",height:"160"}} variant="top" src="https://via.placeholder.com/100.png?text=267X160" />
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="" xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card>
              <Card.Img className="p-4" variant="top" src="https://via.placeholder.com/100.png?text=267X160" />
              <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>  
          </Col>
          {/* </CardColumns> */}
          </Row>
          </div> {/* row */}
          <h1 className="contact-us-h1">Contact Us</h1>
          <Form id="contact-form">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Sender Name</Form.Label>
              <Form.Control name="senderName" type="text" value={this.state.senderName} onChange={this.handleChange} placeholder="Name" />
            </Form.Group>
            {/* <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group> */}
            {/* <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group> */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message content</Form.Label>
              <Form.Control name='content' value={this.state.content} onChange={this.handleChange} as="textarea" rows="3" />
            </Form.Group>
            <Button className="float-left" variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div> // top-div
    )
  }
} // Class

export default Home;
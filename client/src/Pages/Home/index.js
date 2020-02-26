// Home Page
import React, { Component } from 'react';
import { CardDeck, Card, Form, Button } from 'react-bootstrap'
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
        <div className='home-inner'>
        
          <div className="panel-img float-left">
            <img className='home-image' src="https://via.placeholder.com/475x277.png" alt='Our Team'/>
          </div>
          <div className='card-one float-left'>
            <h2>About Us</h2>
            <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon
            starboard grog black jack gangway rutters.
            Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a
            spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry
            doubloon chase. </p>
          </div>
          <h2 className="our-services">Our services</h2>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/100.png?text=267X160" />
              <Card.Body>
                <Card.Title>Commercial & Industrial Roofing</Card.Title>
                <Card.Text>
                Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.
                </Card.Text>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/100.png?text=267X160" />
              <Card.Body>
                <Card.Title>Roof Replacement & Repair</Card.Title>
                <Card.Text>
                  Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.{' '}
                </Card.Text>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/100.png?text=267X160" />
              <Card.Body>
                <Card.Title>Gutter Replacement & Repair</Card.Title>
                <Card.Text>
                Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase.
                </Card.Text>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
          </CardDeck>
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
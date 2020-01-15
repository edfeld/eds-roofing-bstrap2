// Home Page
import React, { Component } from 'react';
import { CardDeck, Card, Form, Button } from 'react-bootstrap'
import SlideshowFade from '../../Components/SlideShow/SlideShowFade';
import './style.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      body: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
    })
    // console.log("HandleChange: ", this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

// function Home() {

  render() {
    return (
    <div className='top-div'>
      <SlideshowFade />
      <div className="home-outer">
        <div className='home-inner'>
        
          <div className="panel-img">
            <img className='home-image' src="https://via.placeholder.com/475x277.png" alt='Our Team'/>
          </div>
          <div className='card-one'>
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
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control name='body' value={this.state.body} onChange={this.handleChange} as="textarea" rows="3" />
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
import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';


export default class FittsModal extends React.Component {
  constructor() {
    super()
    this.state = {//default values
      show: false,
      id: null,
      trials: 0,
      value: 'easy',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }//change difficulty
  handleModal() { this.setState({ show: !this.state.show }) } //close modal
  handleInputChange(event) {   //handle input change for id and for trials
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    axios.post("http://127.0.0.1:3001/test/create", {
      id: this.state.id,
      trials: this.state.trials,
      difficulty: this.state.value
    })
      .then((response) => {
        if (response.status !== '200') throw new Error(response.status);
        else return response;
      })
      .then((data) => {this.setState({startTrial: true }); console.log(`starting ${data.data.trials} trials`)})
      .catch((error) =>{console.log('error: ' + error);})

  }

  render() {
    return (
      <div>
        <Button onClick={() => { this.handleModal() }}> Test</Button>
        <Modal show={this.state.show} onHide={() => { this.handleModal() }} >
          <Modal.Header closeButton>Test Settings</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="subjectId">
                <Form.Label>Subject ID</Form.Label>
                <Form.Control name="id" type="subjectId" placeholder="" onChange={this.handleInputChange} />
                <Form.Text className="text-muted">
                  <></>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="trials">
                <Form.Label >Number of Trials</Form.Label>
                <Form.Control name="trials" type="trials" placeholder="" onChange={this.handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="difficulty">
                <Form.Label>Difficulty</Form.Label>
                <Form.Select value={this.state.value} onChange={this.handleChange}>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { this.handleModal() }}>Close</Button>
            <Button onClick={this.handleSubmit}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
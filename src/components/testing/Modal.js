<<<<<<< Updated upstream:src/components/testing/Modal.js
import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
=======
import React, {useState} from 'react';
import {button, Modal, Form} from 'react-bootstrap';
>>>>>>> Stashed changes:src/components/Modal.js

export default class FittsModal extends React.Component {
  constructor()
  {
    super()
    this.state={
<<<<<<< Updated upstream:src/components/testing/Modal.js
      show: false
    }
  }
  handleModal(){
    this.setState({show:!this.state.show})
  }
=======
      show: true
    }
  }

  handleModal(){
    this.setState({show:!this.state.show})
  }

>>>>>>> Stashed changes:src/components/Modal.js
  render() {
     return (
        <div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-danger me-md-5" type="button"
            onClick={() => {this.handleModal()}}>Stop Trial</button>
          </div>
          <Modal show={this.state.show} onHide={() => {this.handleModal()}} >

            <Modal.Header closeButton>Test Settings</Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="subjectId">
                  <Form.Label>Subject ID</Form.Label>
                  <Form.Control type="subjectId" placeholder="" />
                  <Form.Text className="text-muted">
                    <></>
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="trials">
                  <Form.Label>Number of Trials</Form.Label>
                  <Form.Control type="trials" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="difficulty">
                  <Form.Label>Difficulty</Form.Label>
                    <Form.Select>
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </Form.Select>
                </Form.Group>
             </Form>
            </Modal.Body>
            <Modal.Footer>
<<<<<<< Updated upstream:src/components/testing/Modal.js
              <Button onClick={() => {this.handleModal()}}>Close</Button>
              <Button>Save</Button>
=======
              {/* <Button onClick={() => {this.handleModal()}}>Close</Button> */}
              <button type="button" class="btn btn-primary">Start</button>
>>>>>>> Stashed changes:src/components/Modal.js
            </Modal.Footer>
          </Modal>
        </div>
      );
    
  }
}
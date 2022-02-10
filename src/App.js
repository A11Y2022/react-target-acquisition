import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      show: false
    }
  }
  handleModal(){
    this.setState({show:!this.state.show})
  }
  render() {
     return (
        <div>
          <Button onClick={() => {this.handleModal()}}> Test</Button>
          <Modal show= {this.state.show} onHide={() => {this.handleModal()}} >
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
              <Button onClick={() => {this.handleModal()}}>Close</Button>
              <Button>Save</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    
  }
}


export default App;

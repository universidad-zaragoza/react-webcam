import Webcam from "react-webcam";
import "./App.css";
import { Form, Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Webcam />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

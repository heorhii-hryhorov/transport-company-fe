import React from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';

const DeleteTransportForm: React.FC = () => (
  <div>
    <h3 className="mb-3">Delete transport</h3>
    <Form>
      <FormGroup row>
        <Label for="transport-id" sm={2}>
          Transport ID
        </Label>
        <Col sm={10}>
          <Input type="select" name="transport-id" id="transport-id">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ size: 12, offset: 2 }}>
          <Button type="submit" color="danger">Delete</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

export default DeleteTransportForm;

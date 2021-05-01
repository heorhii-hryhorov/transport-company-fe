import React from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Label,
} from 'reactstrap';

const EditRouteForm: React.FC = () => (
  <div>
    <h3 className="mb-3">Edit route</h3>
    <Form>
      <FormGroup row>
        <Label for="route-id" sm={2}>
          Route ID
        </Label>
        <Col sm={10}>
          <Input type="select" name="route-id" id="route-id">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="start-city" sm={2}>
          Start City
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="start-city"
            id="start-city"
            placeholder="Enter start city"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="end-city" sm={2}>
          End City
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="end-city"
            id="end-city"
            placeholder="Enter end city"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="distance" sm={2}>Distance</Label>
        <Col sm={10}>
          <Input
            type="number"
            name="distance"
            id="distance"
            placeholder="Enter distance"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="departure-date" sm={2}>Departure date</Label>
        <Col sm={10}>
          <Input
            type="date"
            name="departure-date"
            id="departure-date"
            placeholder="Enter departure date"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="transport-type" sm={2}>
          Transport type
        </Label>
        <Col sm={10}>
          <Input type="select" name="transport-type" id="transport-type">
            <option>cargo</option>
            <option>passenger</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="revenue" sm={2}>Revenue</Label>
        <Col sm={10}>
          <Input
            type="number"
            name="revenue"
            id="revenue"
            placeholder="Enter revenue"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="arrival-date" sm={2}>Arrival date</Label>
        <Col sm={10}>
          <Input
            type="date"
            name="arrival-date"
            id="arrival-date"
            placeholder="Enter arrival date"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{ size: 12, offset: 2 }}>
          <Button type="submit" color="primary">Edit</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

export default EditRouteForm;

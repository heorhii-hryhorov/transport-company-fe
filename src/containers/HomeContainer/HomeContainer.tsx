import React from 'react';
import {
  Col, Container, Row, Table,
} from 'reactstrap';

const HomeContainer: React.FC = () => (
  <Container>
    <Row className="mb-3">
      <Col xs="12">
        <h3>Available Transport</h3>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Transport number</th>
              <th>Model</th>
              <th>Transport type</th>
              <th>Purchase date</th>
              <th>Mileage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody />
        </Table>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <h3>Available Routes</h3>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start City</th>
              <th>End City</th>
              <th>Distance</th>
              <th>Departure date</th>
              <th>Transport type</th>
              <th>Revenue</th>
              <th>Arrival date</th>
              <th>Status</th>
              <th>Transport ID</th>
            </tr>
          </thead>
          <tbody />
        </Table>
      </Col>
    </Row>
  </Container>
);

export default HomeContainer;

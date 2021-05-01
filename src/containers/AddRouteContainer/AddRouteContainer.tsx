import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import AddRouteForm from '../../components/RouteForms/AddRouteForm/AddRouteForm';

const AddRouteContainer: React.FC = () => (
  <Container>
    <Row>
      <Col xs="12">
        <AddRouteForm />
      </Col>
    </Row>
  </Container>
);

export default AddRouteContainer;

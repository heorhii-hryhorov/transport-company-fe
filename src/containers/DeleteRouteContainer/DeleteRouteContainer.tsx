import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import DeleteRouteForm from '../../components/RouteForms/DeleteRouteForm/DeleteRouteForm';

const DeleteRouteContainer: React.FC = () => (
  <Container>
    <Row className="d-flex justify-content-center">
      <Col xs="12">
        <DeleteRouteForm />
      </Col>
    </Row>
  </Container>
);

export default DeleteRouteContainer;

import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import EditRouteForm from '../../components/RouteForms/EditRouteForm/EditRouteForm';

const EditRouteContainer: React.FC = () => (
  <Container>
    <Row>
      <Col xs="12">
        <EditRouteForm />
      </Col>
    </Row>
  </Container>
);

export default EditRouteContainer;

import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import AssignTransportForm from '../../components/RouteForms/AssignTransportForm/AssignTransportForm';

const AssignTransportContainer: React.FC = () => (
  <Container>
    <Row className="d-flex justify-content-center">
      <Col xs="12">
        <AssignTransportForm />
      </Col>
    </Row>
  </Container>
);

export default AssignTransportContainer;

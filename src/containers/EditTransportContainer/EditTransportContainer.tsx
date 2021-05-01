import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import EditTransportForm from '../../components/TransportForms/EditTransportForm/EditTransportForm';

const EditTransportContainer: React.FC = () => (
  <Container>
    <Row>
      <Col xs="12">
        <EditTransportForm />
      </Col>
    </Row>
  </Container>
);

export default EditTransportContainer;

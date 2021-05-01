import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import AddTransportForm from '../../components/TransportForms/AddTransportForm/AddTransportForm';

const AddTransportContainer: React.FC = () => (
  <Container>
    <Row>
      <Col xs="12">
        <AddTransportForm />
      </Col>
    </Row>
  </Container>
);

export default AddTransportContainer;

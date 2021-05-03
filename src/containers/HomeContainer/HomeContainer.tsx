import React, { useEffect, useState } from 'react';
import {
  Col, Container, Row, Table,
} from 'reactstrap';
import { getRoutes, getTransports } from '../../services/api';

const HomeContainer: React.FC = () => {
  const [routes, setRoutes] = useState<any>([]);
  const [transports, setTransports] = useState<any>([]);
  const retrieveRoutes = () => {
    getRoutes()
      .then((response: any) => {
        setRoutes(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  };
  const retrieveTransports = () => {
    getTransports()
      .then((response: any) => {
        setTransports(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  };
  useEffect(() => {
    retrieveRoutes();
  }, []);
  useEffect(() => {
    retrieveTransports();
  }, []);
  return (
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
            <tbody>
              {transports.map((transport: any) => (
                <tr key={transport.id}>
                  <td>{transport.id}</td>
                  <td>{transport.transportNumber}</td>
                  <td>{transport.model}</td>
                  <td>{transport.transportType}</td>
                  <td>
                    {
                    transport.purchaseDate && new Date(transport.purchaseDate).toDateString()
                    }
                  </td>
                  <td>{transport.mileage}</td>
                  <td>{transport.status}</td>
                </tr>
              ))}
            </tbody>
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
            <tbody>
              {routes.map((route: any) => (
                <tr key={route.id}>
                  <td>{route.id}</td>
                  <td>{route.startCity}</td>
                  <td>{route.endCity}</td>
                  <td>{route.distance}</td>
                  <td>{route.departureDate && new Date(route.departureDate).toDateString()}</td>
                  <td>{route.transportType}</td>
                  <td>{route.revenue}</td>
                  <td>{route.arrivalDate && new Date(route.arrivalDate).toDateString()}</td>
                  <td>{route.status}</td>
                  <td>{route.transportId && route.transportId }</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeContainer;

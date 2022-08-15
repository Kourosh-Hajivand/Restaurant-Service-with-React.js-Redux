import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import PersonAdd from "./Components/PersonAdd";
import PersonCard from "./Components/PersonCard";
import "./App.css";
import { useSelector } from "react-redux";
import PersonName from "./Components/PersonName";

function App() {
  const names = useSelector((state) => state.Reservation.value);
  const Order = useSelector((state) => state.Order.value);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={10} className="shadow p-5 rounded">
          <Row className=" mb-5 align-items-center">
            <Col>
              <a href="https://github.com/Kourosh-Hajivand">
                <div className="Box"></div>
              </a>
            </Col>
            <Col md={8} className=" text-center">
              <h1>Restaurant</h1>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Row className="flex-column">
                <Col>
                  <h3 className="text-center mb-5">Reservation</h3>
                </Col>
                <Col className="Reservation">
                  {names.map((item, index) => {
                    return <PersonName key={index} name={item} />;
                  })}
                </Col>
                <Col>
                  <PersonAdd />
                </Col>
              </Row>
            </Col>
            <Col className="border-start Reservation">
              {Order.map((item) => {
                return (
                  <PersonCard
                    key={item.id}
                    id={item.id}
                    Name={item.Name}
                    food={item.Food}
                  />
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default App;

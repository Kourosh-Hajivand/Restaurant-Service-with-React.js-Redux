import React, { useState } from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddFood, RemoveFood } from "../App/Slicer/OrderSlice";
import FoodName from "./FoodName";

function PersonCard(props) {
  const id = props.id;
  const dispatch = useDispatch();
  const [Food, SetFood] = useState("");
  const InputFoodHandler = (e) => {
    SetFood(e.target.value);
  };
  const AddFoodHandler = () => {
    dispatch(AddFood({ Food: Food, id: id }));
    SetFood("");
  };
  return (
    <div className="p-3 shadow rounded mb-4 mt-3">
      <Row>
        <Col md={9}>
          <div>
            <h5 className="mb-4">{props.Name}</h5>
            <div
              className="d-flex justify-content-start overflow-scroll p-2"
              style={{ maxWidth: "420px" }}
            >
              {props.food.map((item, index) => {
                return <FoodName key={index} food={item} />;
              })}
            </div>
          </div>
          <div></div>
        </Col>
        <Col>
          <Row className="mb-2">
            <FormControl
              type="text"
              placeholder="Food"
              value={Food}
              onChange={(e) => InputFoodHandler(e)}
            />
          </Row>
          <Row>
            <Col className="ps-0">
              <Button
                className="w-100 btn-danger "
                onClick={() => dispatch(RemoveFood({ id: id }))}
              >
                Delete
              </Button>
            </Col>
            <Col className="pe-0">
              <Button
                className="w-100 btn-success"
                onClick={() => AddFoodHandler()}
              >
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default PersonCard;

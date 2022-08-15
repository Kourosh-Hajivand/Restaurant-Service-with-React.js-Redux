import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddReservation } from "../App/Slicer/ReservSlicer";

function PersonAdd() {
  const [state, setstate] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setstate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.form[0].value = "";
    dispatch(AddReservation(state));
  };

  return (
    <Form>
      <FormGroup>
        <FormControl
          onChange={(e) => inputHandler(e)}
          type="text"
          placeholder="Person-Name..."
        />
        <Button
          type="submit"
          onClick={(e) => submitHandler(e)}
          className="w-100 mt-3"
        >
          Add
        </Button>
      </FormGroup>
    </Form>
  );
}

export default PersonAdd;

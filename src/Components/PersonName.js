import React from "react";
import { useDispatch } from "react-redux";
import { RemoveReservation } from "../App/Slicer/ReservSlicer";
import { AddPerson } from "../App/Slicer/OrderSlice";
import { v4 as uuidv4 } from "uuid";
function PersonName(props) {
  const dispatch = useDispatch();
  const NameclickHandler = (name) => {
    dispatch(
      AddPerson({
        Name: name,
        Food: [],
        id: uuidv4(),
      })
    );
    dispatch(RemoveReservation(name));
  };
  return (
    <div
      onClick={() => NameclickHandler(props.name)}
      className="p-3 shadow-sm mb-5 rounded text-center"
    >
      {props.name}
    </div>
  );
}

export default PersonName;

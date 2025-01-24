import React from "react";
import TextField from "../form/TextField";
import { useSelector, useDispatch } from "react-redux";
import { updateStrategy } from "../../redux/actions/strategyAction";

const StrategyForm = () => {
  const dispatch = useDispatch();
  const strategyInput = useSelector((state) => state.strategy.strategyInput);

  const inputChangeHandler = (name, value, type) => {
    let val = value;
    if (type === "number") {
      if (value) {
        val = parseFloat(value);
      } else {
        val = "";
      }
    }
      let obj = {
        ...strategyInput,
      [name]: val,
    };
    dispatch(updateStrategy(obj));
  };

  return (
    <div>
      <TextField
        type="string"
        name="name"
        value={strategyInput.name}
        updateValue={inputChangeHandler}
        label="Name"
      />
      <TextField
        type="string"
        name="accuracy"
        value={strategyInput.accuracy}
        updateValue={inputChangeHandler}
        label="Accuracy"
      />
    </div>
  );
};

export default StrategyForm;

import { React, useState } from "react";
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
    

    const descriptionChangeHandler = (e) => {
        let name = e.target.name;
        let val = e.target.value
        let obj = {
            ...strategyInput,
            [name]: val
        }
        dispatch(updateStrategy(obj));
    }

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
      <textarea
        id="description"
        name="description"
        value={strategyInput.description}
        onChange={descriptionChangeHandler}
        placeholder="Description"
        rows={5}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     
    </div>
  );
};

export default StrategyForm;

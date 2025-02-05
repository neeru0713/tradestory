import React, { useEffect } from "react";
import TextField from "../form/TextField";
import { useSelector, useDispatch } from "react-redux";
import Selector from "../form/Selector";
import { updateBackTestDataInput } from "../../redux/actions/strategyAction";

const BackTestDataForm = () => {
  const dispatch = useDispatch();
  const backTestDataInputForm = useSelector(
    (state) => state.strategy.backTestDataInputForm
  );

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
        ...backTestDataInputForm,
        [name]: val,
      };
      dispatch(updateBackTestDataInput(obj));
    };

  
    

    useEffect(() => {
     console.log("0000000000", backTestDataInputForm);
 }, [backTestDataInputForm]);

  const resultOptions = [
    {
      value: "profit",
      label: "Profit",
    },
    {
      value: "loss",
      label: "Loss",
    },
  ];

  return (
    <div className="flex flex-col gap-2 m-4">
      <TextField
        type="date"
        name="date"
        value={backTestDataInputForm.date}
        updateValue={inputChangeHandler}
        label="Date"
      />
      <TextField
        type="time"
        name="time"
        value={backTestDataInputForm.time}
        updateValue={inputChangeHandler}
        label="Time"
      />
      <Selector
        name="result"
        value={backTestDataInputForm.result}
        updateValue={inputChangeHandler}
        label="Result"
        options={resultOptions}
      />
    </div>
  );
};

export default BackTestDataForm;

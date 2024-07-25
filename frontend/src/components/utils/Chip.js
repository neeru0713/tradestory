import React from "react";

const Chip = ({ data, width, height }) => {

    const styles ={
        width:`${width}px`,
        height:`${height}px`
    }


  return (
    <div className="border rounded-md bg-[#fdedb5] text-[#b13603] p-2" style={styles}>
      {data}    </div>
  );
};

export default Chip;

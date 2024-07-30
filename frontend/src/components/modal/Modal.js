import React, { useState, useEffect } from "react";

import { RxCross2 } from "react-icons/rx";
import Button from "../form/button/Button";

const Modal = ({
  showModal,
  setShowModal,
  title,
  children,
  numberOfPages,
  height,
  width,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const crossHandler = () => {
    setShowModal(false);
  };

  const styles = {
    height: height + "px",
    width: width + "px",
  };

  const renderContent = () => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray[pageNumber - 1];
  };

  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-gray-100 opacity-80"></div>
        <div
          style={styles}
          className="modal border shadow-xl p-2 px-4 rounded-lg bg-white z-10 flex flex-col gap-4 relative"
        >
          <header className="h-[5%]">
            <div className="cross-button-wrapper absolute right-1 top-1 p-1 text-lg hover:rounded-md hover:bg-gray-200 cursor-pointer">
              <RxCross2 onClick={crossHandler} />
            </div>
            <h1 className="text-xl font-semibold px-4 py-2 text-left ">
              {title}
            </h1>
            <hr></hr>
          </header>

          <div className="modal-content h-[85%]">{renderContent()}</div>

          <footer className="h-[10%] w-full">
            <div className="flex flex-col">
              <hr></hr>
              <div className="w-full flex justify-between items-center pt-4">
                {numberOfPages > pageNumber && (
                  <div
                    onClick={() => setPageNumber(pageNumber + 1)}
                    className="flex"
                  >
                    <Button name="Next" width="150" type="secondary" />
                  </div>
                )}

                {pageNumber > 1 && (
                  <div
                    onClick={() => setPageNumber(pageNumber - 1)}
                    className="flex "
                  >
                    <Button name="Prev" width="150" type="secondary" />
                  </div>
                )}

                {numberOfPages === pageNumber && (
                  <div>
                    <Button name="Submit" width="150" type="primary" />
                  </div>
                )}
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  );
};

export default Modal;

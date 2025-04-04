import React, { useState, useEffect, Component } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../form/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { createTrade } from "../../redux/actions/tradeAction";
import { createStrategy } from "../../redux/actions/strategyAction";
import { closeModal } from "../../redux/actions/modalAction";

const Modal = ({ title, children, numberOfPages, height, width, className, saveClickHandler}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isShowPageNumber, setIsShowPageNumber] = useState(false)
  const dispatch = useDispatch();
  // const trade = useSelector((state) => state.trade);
  const isOpen = useSelector((state) => state.modal.isOpen);
  // const isOpenEdit = useSelector((state) => state.modal.isOpenEdit);

  if (!isOpen) return null;

  // useEffect(() => {
  //   console.log("isOpenEdit, isOpen : ", isOpenEdit, isOpen);
  // }, [isOpenEdit, isOpen]);

  const crossHandler = () => {
    dispatch(closeModal());
  };

  const styles = {
    height: height + "px",
    width: width + "px",
  };

  const renderContent = () => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray[pageNumber - 1];
  };

  const handleSubmit = () => {
      saveClickHandler();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div
        style={styles}
        className="modal border shadow-lg shadow-gray-500 p-2 px-4 rounded-lg bg-white z-10 flex flex-col gap-4 relative"
      >
        <header className="h-[5%]">
          <div className="cross-button-wrapper absolute right-1 top-1 p-1 text-lg hover:rounded-md hover:bg-gray-200 cursor-pointer">
            <RxCross2 onClick={crossHandler} />
          </div>
          <h1 className="text-xl font-semibold px-4 py-2 text-left ">
            {title}
          </h1>
          {isShowPageNumber && <hr></hr>}
        </header>

        <div className="modal-content h-[80%]">{renderContent()}</div>

        <footer className="w-full">
          <div className="flex flex-col">
            {isShowPageNumber && <hr></hr>}
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
                  className="flex"
                >
                  <Button name="Prev" width="150" type="secondary" />
                </div>
              )}

              {numberOfPages === pageNumber && (
                <div>
                  <Button
                    name="Submit"
                    width="150"
                    type="primary"
                    onClick={handleSubmit}
                  />
                </div>
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Modal;

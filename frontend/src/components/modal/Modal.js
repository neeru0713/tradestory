import React, { useState, useEffect } from "react";

import { RxCross2 } from "react-icons/rx";

const Modal = ({ showModal, setShowModal, title, children,  }) => {
  const [pageNumber, setPageNumber] = useState(2);
  const crossHandler = () => {
    setShowModal(false);
  };

  const renderContent = () => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray[pageNumber - 1];
  };

  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-gray-100 opacity-80"></div>
        <div className="border shadow-xl p-6 rounded-lg bg-white z-10 flex flex-col gap-4 relative h-[600px] w-[500px]">
          <div className="cross-button-wrapper absolute right-1 top-1 p-1 text-lg hover:rounded-md hover:bg-gray-200 cursor-pointer">
            <RxCross2 onClick={crossHandler} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl text-[#30313d] font-semibold p-2 pb-6">
              {title}
            </h1>
            {renderContent()}
            <></>
            <button>Next</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

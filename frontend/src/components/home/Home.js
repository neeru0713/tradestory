import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/modalAction";
import Modal from "../modal/Modal";
const Home = () => {
    const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  //  const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
      dispatch(openModal());
    };

  return (
    <div className="home h-full bg-gray-100 w-full flex flex-col gap-4 p-10">
      <h1 className="text-5xl font-bold text-left text-[#23158a] cursor-pointer">
        Hello {auth.user?.username}
      </h1>
      <div className="flex gap-5 cursor-pointer">
        <div
          onClick={clickHandler}
          className="p-4 bg-white border rounded-md hover:border-[#4039ad]"
        >
          Total returns
        </div>
        <div className="p-4 bg-white border rounded-md hover:border-[#4039ad]">
          Total P&L
        </div>
        <div className="p-4 bg-white border rounded-md hover:border-[#4039ad]">
          R Multiple
        </div>
      </div>
            <Modal className="text-3xl" title="Total return" height={500} width={400} ></Modal>
    </div>
  );
};

export default Home;

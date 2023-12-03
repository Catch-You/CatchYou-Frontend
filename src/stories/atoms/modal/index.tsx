import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useNavigate } from "react-router-dom";

export type TModal = {
  text: string;
  input?: boolean;
  setIsModalOpen: (value: boolean) => void;
  navigateUrl?: string;
}

const Modal = ({text, input, setIsModalOpen, navigateUrl}: TModal) => {
  const navigate = useNavigate();
  const closeModal = () => {
    setIsModalOpen(false);
    if (navigateUrl) {
      navigate(`${navigateUrl}`);
    }
  }

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
      setIsModalOpen(false);
  });

  return (
    <>
    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeModal}></div>

    <div className="flex flex-col bg-white w-full max-w-450 h-140 px-20 drop-shadow-lg rounded-20 absolute ml-20 left-1/3 top-1/4 z-50">
      <div className="flex justify-between py-25">
        <div className="font-semibold">{text}</div>
        <button onClick={() => setIsModalOpen(false)}>x</button>
      </div>
      <div className="flex justify-end">
        {input? 
        <div className="flex">
          <input className="rounded-12 border w-340 mr-20 h-40"></input>
          <button className="bg-mainColor text-white text-13 px-13 py-10 rounded-13" onClick={closeModal}>확인</button>
        </div> :
        <button className="bg-mainColor text-white text-13 px-13 py-10 rounded-13 ml-18" onClick={closeModal}>확인</button>
        }
      </div>
    </div>
    </>
  ) 
}

export default Modal;
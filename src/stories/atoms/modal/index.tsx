export type TModal = {
  text: string;
  input?: boolean;
}

const Modal = ({text, input}: TModal) => {
  return (
    <div className="flex flex-col bg-white w-full max-w-450 h-140 px-20 drop-shadow-lg rounded-20">
      <div className="flex justify-between py-25">
        <div className="font-semibold">{text}</div>
        <button>x</button>
      </div>
      <div className="flex justify-end">
        {input? 
        <div className="flex">
          <input className="rounded-12 border w-340 mr-20 h-40"></input>
          <button className="bg-mainColor text-white text-13 px-13 py-10 rounded-13">확인</button>
        </div> :
        <button className="bg-mainColor text-white text-13 px-13 rounded-13 ml-18">확인</button>
      }
        
      </div>
    </div>
  ) 
}

export default Modal;
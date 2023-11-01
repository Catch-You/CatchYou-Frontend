import { TLongBtn } from "../longBtn";

const shortBtn = ({text, activate}: TLongBtn) => {
  return (
    <button className={`flex items-center justify-center rounded-17 font-semibold text-center text-white py-16 w-full max-w-80 h-48 ${activate ? 'bg-mainColor ' : null}`}>{text}</button>
  )
}

export default shortBtn;
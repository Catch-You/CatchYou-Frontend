import { TLongBtn } from "../longBtn";

const ShortBtn = ({text, activate}: TLongBtn) => {
  return (
    <button className={`flex items-center justify-center rounded-12 font-semibold text-center text-white w-full max-w-80 h-50 ${activate ? 'bg-mainColor ' : null}`}>{text}</button>
  )
}

export default ShortBtn;

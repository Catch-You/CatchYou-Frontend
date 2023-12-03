import { TLongBtn } from "../longBtn";

const ShortBtn = ({ text, activate, disabled, onClick }: TLongBtn) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`flex items-center justify-center rounded-12 font-semibold text-center text-white w-80 py-12 ${activate ? 'bg-mainColor ' : 'bg-superSubColor'}`}>{text}</button>
  )
}

export default ShortBtn;

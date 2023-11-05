export type TLongBtn = {
  text: string;
  activate: boolean;
  onClick: () => void;
}

const LongBtn = ({ text, activate, onClick }: TLongBtn) => {
  return (
    <button onClick={onClick} disabled={activate? false : true} className={`rounded-17 font-semibold text-center text-white py-14 w-full ${activate ? 'bg-mainColor' : 'bg-superSubColor'}` }>{text}</button>
  );
}

export default LongBtn;
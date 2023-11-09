export type TLongBtn = {
  text: React.ReactNode;
  activate: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onChange?: () => void;
}

const LongBtn = ({ text, activate, onClick }: TLongBtn) => {
  return (
    <button onClick={onClick} disabled={activate? false : true} className={`rounded-17 font-semibold text-center text-white py-14 w-full ${activate ? 'bg-mainColor' : 'bg-superSubColor'}` }>{text}</button>
  );
}

export default LongBtn;
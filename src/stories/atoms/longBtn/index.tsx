type TLongBtn = {
  text: string;
  activate?: boolean;
}

const LongBtn = ({ text, activate }: TLongBtn) => {
  return (
    <button className={`rounded-17 font-semibold text-center text-white py-16 px-175 ${activate ? 'bg-mainColor ' : 'bg-superSubColor'}`}>{text}</button>
  );
}

export default LongBtn;
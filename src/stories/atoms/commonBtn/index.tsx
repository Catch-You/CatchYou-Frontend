type TCommonBtn = {
  text: string;
  onClick?: () => void;
}
const CommonBtn = ({text, onClick}:TCommonBtn) => {
  return (
    <button className="text-white bg-mainColor px-35 py-10 rounded-16 my-10 w-full max-w-240" onClick={onClick}>{text}</button>
  )
}

export default CommonBtn;
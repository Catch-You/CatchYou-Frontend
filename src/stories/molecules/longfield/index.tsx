type TLongfield = {
  label: string;
  placeholder: string;
}

const Longfield = ({label, placeholder}: TLongfield) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input placeholder={placeholder} className="border-2 border-superSubColor rounded-12 px-14 py-13"></input>
    </div>
  );
}

export default Longfield;
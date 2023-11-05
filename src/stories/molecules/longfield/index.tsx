export type TField = {
  label: string;
  placeholder?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Longfield = ({label, placeholder, type, onChange}: TField) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-400">
      <label>{label}</label>
      <input onChange={onChange} placeholder={placeholder} type={type} className="border-2 border-superSubColor rounded-12 px-14 py-10"></input>
    </div>
  );
}

export default Longfield;
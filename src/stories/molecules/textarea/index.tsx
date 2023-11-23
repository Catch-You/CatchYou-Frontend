import { Dispatch, SetStateAction, useState } from "react";
import { TCaseForm } from "../../pages/caseRegist/CaseRegistPage";

type TTextArea = {
  text: string;
  placeholder: string;
  rows: number;
  maxInput: number;
  bgColor?: boolean;
  type?: number;
  caseForm?: TCaseForm,
  setCaseForm?: Dispatch<SetStateAction<TCaseForm>>;
}

const TextArea = ({text, rows, maxInput, placeholder, type, bgColor, caseForm, setCaseForm}: TTextArea) => {
  const [inputCount, setInputCount] = useState(0);

const onTextareaHandler = (input: string) => {
    setInputCount(
      input.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&").length
    );
    if (caseForm && setCaseForm && type === 0) {
      setCaseForm({...caseForm, impressive: input})
    } else if (caseForm && setCaseForm && type === 1) {
      setCaseForm({...caseForm, overview: input})
    }
    
  };
  return (
    <>
      <div className="flex justify-between">{text} <span className={bgColor? "text-subColor ": "text-superSubColor"+" font-semibold"}>({inputCount}/{maxInput})</span></div>
      <textarea placeholder={placeholder} maxLength={maxInput} rows={rows} className="w-full rounded-12 border-2 border-superSubColor px-14 py-10 mt-8" onChange={(e) => onTextareaHandler(e.target.value)}>
      </textarea>
    </>
  )
}

export default TextArea;
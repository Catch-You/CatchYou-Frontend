import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Dispatch, SetStateAction, useState } from 'react';
import { TCaseForm } from '../../../types/case/caseList';

type TSelector = {
  text: string;
  options: string[];
  selectedValue?: string;
  status?: string;
  type?: number;
  caseForm?: TCaseForm,
  setSex?: (value: string) => void;
  setStatus?: (value: string) => void;
  setCaseForm?: Dispatch<SetStateAction<TCaseForm>>;
}

const Selector = ({text, options, type, caseForm, selectedValue, status, setStatus, setCaseForm, setSex }: TSelector) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(selectedValue? selectedValue : '');

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (status && setStatus && type === 0) {
      setStatus(option === "공개"? 'Y': 'N')
    } else if (caseForm && setCaseForm && type === 1) {
      setCaseForm({...caseForm, region: option})
    } else if (caseForm && setCaseForm && type === 2) {
      setCaseForm({...caseForm, crimeType: option})
    } else if (setSex && type === 99) {
      setSex(option)
    }
    setIsOpen(false);
  };


  return (
    <div className="flex flex-col gap-2">
      <div>{text}</div>
      <div className='relative'>
        <select className='w-193 rounded-12 border-2 border-superSubColor px-14 py-10 appearance-none' onClick={handleToggle} onChange={(e) => setSelectedOption(e.target.value)} >
          <option>
            {selectedOption ? selectedOption : '옵션을 선택하세요'}
          </option>
        </select>
        <span className='absolute top-1/4 start-40 text-superSubColor cursor-pointer' onClick={handleToggle}><KeyboardArrowDownIcon /></span>
        
        {isOpen && (
          <div className="absolute top-full left-0 z-10 w-full max-w-193 rounded-12 border-2 border-superSubColor mt-1 bg-white p-3">
            {options.map((item, index) => (
              <option
                key={`${item}+${index}`}
                value={item}
                className="px-10 py-6 cursor-pointer hover:bg-gray-200 bg-white"
                onClick={() => handleOptionSelect(item)}
              >
                {item}
              </option>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Selector;
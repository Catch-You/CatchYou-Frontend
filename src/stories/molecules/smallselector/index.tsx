import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Dispatch, SetStateAction, useState } from 'react';
import { TCaseForm } from '../../pages/caseRegist/CaseRegistPage';

type TSelector = {
  text: string;
  options: string[];
  type?: number;
  caseForm?: TCaseForm,
  setCaseForm?: Dispatch<SetStateAction<TCaseForm>>;
}

const SmallSelector = ({text, options, type, caseForm, setCaseForm }: TSelector) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (caseForm && setCaseForm && type === 0) {
      setCaseForm({...caseForm, open: option==="공개"? true: false})
    } else if (caseForm && setCaseForm && type === 1) {
      setCaseForm({...caseForm, region: option})
    } else if (caseForm && setCaseForm && type === 2) {
      setCaseForm({...caseForm, type: option})
    }
    setIsOpen(false);
  };

  const handleSelectClick = (e: React.MouseEvent<HTMLSelectElement>) => {
    e.preventDefault(); // 시스템 기본 동작 막기
    handleToggle(); // 드롭다운 토글
  };

  return (
    <div className="flex flex-col gap-1">
      <div className='text-14'>{text}</div>
      <div className='relative'>
        <select className='w-193 rounded-12 border-2 border-superSubColor px-14 py-8 appearance-none text-15' onClick={handleSelectClick} onChange={(e) => setSelectedOption(e.target.value)} >
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
                className="px-10 py-5 cursor-pointer hover:bg-gray-200 bg-white text-15"
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

export default SmallSelector;
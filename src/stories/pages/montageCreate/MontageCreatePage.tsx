import { useEffect, useState } from 'react';
import CommonBtn from '../../atoms/commonBtn';
import Selector from '../../molecules/selector';
import TextArea from '../../molecules/textarea';
import './styles.css'
import Modal from '../../atoms/modal';

const MontageCreatePage = () => {
  const [recreate, setRecreate] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userCode, setUserCode] = useState('');

  const handleClick = () => {
    setRecreate(true);
  }

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
      <div className='flex gap-4 pl-20 w-full'>
        {isModalOpen && <Modal text={"사건 코드를 입력하세요."} input={true} setIsModalOpen={setIsModalOpen} userCode={userCode} setUserCode={setUserCode} />}
        <div className='flex flex-col justify-center items-center border border-superSubColor px-100 h-full min-h-500 w-full max-w-550 rounded-16'>
          {recreate ? ( 
            <>
              <div className="montageNew mb-10"></div><CommonBtn text="재생성하기" /> <CommonBtn text="확정하기" />
            </> ) : ( 
            <>
              <div className="montageNew mb-10"></div><CommonBtn text="생성하기" onClick={handleClick} />
            </> )}      
        </div>
        <div className='bg-superSubColor rounded-16 px-45 flex-1'>
          <div className='flex mt-30'><div className='w-5 h-5 mt-10 mr-10 rounded-3 bg-mainColor'></div><Selector text='성별을 선택해주세요.' options={["남성","여성"]} type={99} /></div>
          <div className='flex mt-30'><div className='w-5 h-5 mt-10 mr-10 rounded-3 bg-mainColor'></div><div className='flex-1'><TextArea text='얼굴에 대한 묘사를 작성해주세요.' placeholder='긴 얼굴로 보통크기이다. 이미 모서리는 앞머리로 보이지 않는다. 콧볼이 넓고 광대가 나왔다. 눈매는 매섭고 턱선은 갸름하다.' rows={6} bgColor={true} type={99} maxInput={600} /></div></div>
        </div>
      </div>
  )
}

export default MontageCreatePage;
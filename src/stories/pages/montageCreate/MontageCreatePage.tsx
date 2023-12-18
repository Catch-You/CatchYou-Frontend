import { useEffect, useState } from 'react';
import CommonBtn from '../../atoms/commonBtn';
import Selector from '../../molecules/selector';
import TextArea from '../../molecules/textarea';
import './styles.css'
import Modal from '../../atoms/modal';
import { postMontageCreate } from '../../../api/montageApi';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { TCaseCodeRes } from '../../../types/case/caseManage';
import { AxiosError } from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil';
import { TMontageCreate } from '../../../types/montage/montageCreate';
import spinner from '../../../assets/rollingSpinner.gif';

const MontageCreatePage = () => {
  const [recreate, setRecreate] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userCode, setUserCode] = useState('');
  const [interviewId, setInterviewId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [montageId, setMontageId] = useState(null);
  const auth = useRecoilValue(userState)

  const [sex, setSex] = useState('');
  const [impression, setImpression] = useState('')
  const prompt = `${sex} ${impression}`

  // server
  const { mutate: montageImage } = useMutation(({interviewId, auth, prompt}:TMontageCreate) => postMontageCreate(interviewId, auth, prompt), {
    onSuccess: (res) => {
      toast("몽타주 생성 완료")
      setMontageId(res.id)
      setRecreate(true);
      setLoading(false);
    },
    onError: (error: AxiosError<TCaseCodeRes>) => {
      if (error.response) {
        setIsModalOpen(true);
        toast.error(error.response.data.reason);
      }
    }
  });

  const handleClick = () => {
    setLoading(true)
    montageImage({interviewId, auth, prompt})
  }

  useEffect(() => {
    if (interviewId === 0 ) {
      setIsModalOpen(true);
    }
  }, []);

  return (
      <div className='flex gap-4 pl-20 w-full'>
        {isModalOpen && <Modal text={"사건 코드를 입력하세요."} input={true} setIsModalOpen={setIsModalOpen} userCode={userCode} setUserCode={setUserCode} setInterviewId={setInterviewId} />}
        <div className='flex flex-col justify-center items-center border border-superSubColor px-100 h-full min-h-500 w-full max-w-550 rounded-16'>
          {loading ? (<img src={spinner} alt='로딩' />)
            : ( recreate?  (<>
            <div className="montageNew mb-10" style={{ backgroundImage: `url(https://diffusion-ml.s3.ap-northeast-2.amazonaws.com/${montageId}.png)`, opacity:1, width: 250, height: 250}}></div><CommonBtn text="재생성하기" onClick={handleClick} /> <CommonBtn text="확정하기" />
            </>):(<><div className="montageNew mb-10"></div><CommonBtn text="생성하기" onClick={handleClick} /> </>))
          }      
        </div>
        <div className='bg-superSubColor rounded-16 px-45 flex-1'>
          <div className='flex mt-30'><div className='w-5 h-5 mt-10 mr-10 rounded-3 bg-mainColor'></div><Selector text='성별을 선택해주세요.' setSex={setSex} options={["남성","여성"]} type={99} /></div>
          <div className='flex mt-30'><div className='w-5 h-5 mt-10 mr-10 rounded-3 bg-mainColor'></div><div className='flex-1'><TextArea text='얼굴에 대한 묘사를 작성해주세요.' placeholder='긴 얼굴로 보통크기이다. 이미 모서리는 앞머리로 보이지 않는다. 콧볼이 넓고 광대가 나왔다. 눈매는 매섭고 턱선은 갸름하다.' setImpression={setImpression} rows={6} bgColor={true} type={99} maxInput={600} /></div></div>
        </div>
      </div>
  )
}

export default MontageCreatePage;
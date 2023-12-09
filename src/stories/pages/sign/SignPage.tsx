import { useEffect, useState } from "react";
import useValid from "../../../hooks/useValid";
import Title from "../../atoms/title";
import Longfield from "../../molecules/longfield";
import NoticeMsg from "../../atoms/noticeMsg";
import LongBtn from "../../atoms/longBtn";
import ShortBtn from "../../atoms/shortBtn";
import { Timer } from "../../../utils/timer";
import Modal from "../../atoms/modal";
import { useGetEmailCheck, useGetEmailCode } from "../../../hooks/queries/user/userQueries";
import { postSignUp } from "../../../api/userApi";
import { useMutation } from "react-query";
import { userRoleState } from "../../../recoil";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const SignPage = () => {
  // client
  const [form, setForm] = useState({
    name: '',
    email: '',
    code: '',
    password: '',
    repassword: '',
    authCode: '',
  })

  const navigate = useNavigate();
  const { validText, isValid } = useValid(form);
  const [error, setError] = useState(false);
  const [auth, setAuth] = useState(false);
  const [isTimeshow, setIsTimeshow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!form.email || !form.password || !form.code || !form.name || !form.repassword ) {
      setError(false)
    }
  }, [form])

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isValid.isCode) {
      setAuth(true);
      timer = setTimeout(() => {
        setAuth(false);
      }, 2000);
    }

  return () => {
    if (timer) {
      clearTimeout(timer);
      }
    };
  }, [isValid.isCode]); 

  // server
  const { mutate: checkEmail, ok } = useGetEmailCheck();
  const { mutate: checkCode, authCode } = useGetEmailCode();
  const { mutate: signUp } = useMutation(postSignUp);
  const userRole = useRecoilValue(userRoleState);
  
  useEffect(() => {
    if (authCode) {
      setForm({ ...form, authCode });
    }
  }, [authCode]);

  const handleMail = () => {
    if (isValid.isEmail) {
      checkEmail(form.email)
    }
  }

  const handleCode = () => {
    if (form.code) {
      checkCode(form.email);
    }
  }

  const handleClick = () => {
    if (isValid.isEmail && isValid.isPassword && isValid.isCode && isValid.isName && isValid.isPasswordConfirm) {
      signUp({ email: form.email, password: form.password, name: form.name, role: userRole });
      setIsModalOpen(true)
      navigate('/login');
    } else {
      setError(!isValid.isEmail || !isValid.isPassword || !isValid.isCode || !isValid.isName || !isValid.isPasswordConfirm);
    }
  }
  const modalOpen = () => {
    if (ok) {
      setIsModalOpen(true)
    }
  }
  const modalOpen = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="flex justify-center mt-30">
      {isModalOpen && <Modal text={"메일이 전송되었습니다."} input={false} setIsModalOpen={setIsModalOpen}/>}
      <form className="w-full max-h-fit	h-full max-w-480 rounded-20 bg-white px-40 py-40" onSubmit={(e) => e.preventDefault()}>
        <Title text="가입하기" />
        <div className={'mt-30 hidden'+( error? (isValid.isEmail && isValid.isPassword && isValid.isCode && isValid.isPasswordConfirm && isValid.isName ? '': ' block '): ((!isValid.isEmail || !isValid.isPassword || !isValid.isPasswordConfirm || !isValid.isCode ||!isValid.isName) ? ' block':''))}><NoticeMsg error={true} text={validText.email || validText.password || validText.code || validText.name || validText.repassword} /></div>
        <div className={'mt-30 '+(ok === null || authCode? 'hidden': 'block')}><NoticeMsg error={ok? false: true} text={ok? "사용가능한 이메일입니다.":"중복된 이메일입니다."} /></div>
        <div className={'mt-30 '+(authCode === null? 'hidden': 'block')}><NoticeMsg error={isValid.isCode? false: true} text={isValid.isCode? "코드가 인증되었습니다.":"코드가일치하지 않습니다."} /></div>
        <div className="mt-30"><Longfield label="이름" type="text" placeholder="홍길동" onChange={e => setForm({...form, name:e.target.value})} /></div>
        <div className="mt-10 flex items-center justify-center"><Longfield label="이메일" type="text" placeholder="example@gmail.com" onChange={e => setForm({...form, email:e.target.value})} /><span className="ml-10 mt-30" onClick={handleMail}><ShortBtn onClick={modalOpen} text={isTimeshow ? (<Timer activate={isTimeshow? false : true} setIsTimeshow={setIsTimeshow} />) : "전송"} activate={isValid.isEmail && !isTimeshow? true:false} disabled={isTimeshow? true: false} /></span></div>
        <div className="mt-10 flex items-center justify-center"><Longfield  label="코드입력" type="text" placeholder="1234" onChange={e => setForm({...form, code:e.target.value})} /><span className="ml-10 mt-30" onClick={handleCode}><ShortBtn activate={form.code? true:false} text="인증" disabled={auth ? true: false} /></span></div>
        <div className="mt-10"><Longfield label="비밀번호" type="password" placeholder="대소문자 구분 없이 6자 이상, 특수문자 포함" onChange={e => setForm({...form, password:e.target.value})} /></div>
        <div className="mt-10"><Longfield label="비밀번호 재입력" type="password" placeholder="대소문자 구분 없이 6자 이상, 특수문자 포함" onChange={e => setForm({...form, repassword:e.target.value})} /></div>
        <div className="mt-40"><LongBtn text="회원가입" onClick={handleClick} activate={form.email && form.password && form.code && form.name && form.repassword && isValid.isCode? true: false} /></div>
      </form>
    </div>
  )
}

export default SignPage;
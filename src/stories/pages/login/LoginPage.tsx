import { useEffect, useState } from "react";
import useValid from "../../../hooks/useValid";
import LongBtn from "../../atoms/longBtn";
import Title from "../../atoms/title";
import Longfield from "../../molecules/longfield";
import ErrorMsg from "../../atoms/errorMsg";

const LoginPage = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const { validText, isValid } = useValid(form);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!form.email || !form.password) {
      setError(false)
    }
  }, [form])

  const handleClick = () => {
    setError(!isValid.isEmail || !isValid.isPassword);
  }

  return(
    <div className="flex justify-center mt-115">
      <form className="w-full max-w-480 rounded-20 bg-white px-40 py-40" onSubmit={(e) => e.preventDefault()}>
        <Title text="로그인하기" />
        <div className={'mt-30 hidden'+( error? (isValid.isEmail && isValid.isPassword ? '': 'block '): ((!isValid.isEmail || !isValid.isPassword) ? ' block':''))}><ErrorMsg text={validText.email || validText.password} /></div>
        <div className="mt-30"><Longfield label="이메일" type="email" placeholder="example@gmail.com" onChange={e => setForm({...form, email:e.target.value})} /></div>
        <div className="mt-10"><Longfield label="비밀번호" type="password" placeholder="대소문자 구분 없이 6자 이상, 특수문자 포함" onChange={e => setForm({...form, password:e.target.value})} /></div>
        <div className="mt-50"><LongBtn text="로그인" onClick={handleClick} activate={form.email && form.password? true: false} /></div>
        <div className="mt-12 gap-2 text-14 text-center">회원이 아니신가요? <a href="/join" className="text-14 font-semibold">가입하기</a></div>
      </form>
    </div>
  )
}

export default LoginPage;
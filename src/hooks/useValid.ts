import { useEffect, useState } from "react";

type TValid = {
  email: string,
  password: string,
  code?: number,
  name?: string,
  repassword?: string
}

const useValid = (changeValue: TValid) => {
  console.log(changeValue, '현재 벨류')
  const [validText, setValidText] = useState({
    email: '',
    password: '',
    repassword: '',
    code: '',
    name: '',
  });
  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isName: false,
    isCode: false,
    isPasswordConfirm: false,
  })

  // 이메일 형식 유효성 체크
  const validateEmail = (email: string) => {
    const exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return exp.test(email);
  };

  // 비밀번호 형식 유효성 체크
  // 6자 이상, 대소문자를 구분하지 않으며, 특수문자 하나이상 포함
  const validatePassword = (password: string) => {
    const exp = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/i;
    return exp.test(password);
  };

  // 이름 형식 유효성 체크
  // 숫자, 특수문자 x
  const validateName = (name: string) => {
    const exp = /^[A-Za-z]+$/i;
    return exp.test(name);
  };

  useEffect(() => {
    setValidText({
      ...validText,
      email: changeValue.email? (validateEmail(changeValue.email)? '' : '이메일 형식이 올바르지 않습니다.'):'',
      password: changeValue.password? (validatePassword(changeValue.password) ? '' : '비밀번호 형식이 올바르지 않습니다.'):'',
      repassword: changeValue.repassword? (changeValue.password === changeValue.repassword ? '' : '비밀번호가 일치하지 않습니다.'): '',
      name: changeValue.name ? (validateName(changeValue.name) ? '' : '특수문자와 숫자를 제외한 실명을 입력해주세요.'): '',
    });

    setIsValid({
      isEmail: validateEmail(changeValue.email),
      isPassword: validatePassword(changeValue.password),
      isName:  changeValue.name ? validateName(changeValue.name) : true,
      isCode: false,
      isPasswordConfirm: changeValue.password === changeValue.repassword,
    });
  }, [changeValue]);

  // TODO: 서버에서 받은 code와 사용자입력 code가 같은지 체크하는 유효성 로직

  return { validText, isValid };
}

export default useValid;
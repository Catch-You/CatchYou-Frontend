import { useMutation } from "react-query"
import { getEmailCheck, getEmailCode } from "../../../api/userApi"
import { useState } from "react";

export const USER_QUERY_KEYS = {
  emailCode: () => ["emailCode"],
} as const;
// 이메일 중복 체크
export const useGetEmailCheck = () => {
  const [ok, setOk] = useState<boolean | null>(null);
  const mutation = useMutation(getEmailCheck, {
    onSuccess: () => {
      setOk(true);
    },
    onError: () => {
      setOk(false);
    }
  });

  return { mutate: mutation.mutate, ok }; 
}

// 이메일 인증
export const useGetEmailCode = () => {
  const [authCode, setAuthCode] = useState<string | null>(null);
  const mutation = useMutation(getEmailCode, {
    onSuccess: (data) => {
      setTimeout(() => {
        setAuthCode(data.data.toString());
      }, 2000); 
    },
  });
  return { mutate: mutation.mutate, authCode }; 
}
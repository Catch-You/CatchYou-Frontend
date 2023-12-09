import { useMutation } from "react-query"
import { getEmailCheck } from "../../../api/userApi"
import { useState } from "react";

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


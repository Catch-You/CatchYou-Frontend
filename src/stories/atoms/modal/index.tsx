import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postCaseCode, postInterviewCreate } from "../../../api/caseApi";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { TCaseCodeRes } from "../../../types/case/caseManage";

export type TModal = {
  text: string;
  input?: boolean;
  userCode?: string;
  setIsModalOpen: (value: boolean) => void;
  setUserCode?: (value: string) => void;
  setInterviewId?: (value: number) => void;
  navigateUrl?: string;
}

const Modal = ({text, input, userCode, setIsModalOpen, setUserCode, setInterviewId, navigateUrl}: TModal) => {

  const auth = useRecoilValue(userState);
  // 사건 코드 확인 
  // success: 인터뷰 생성 api에서 인터뷰 아이디 가져오기
  // fail: 사건 코드 제대로 할 때까지 접근 불가
  const { mutate: codeCheck } = useMutation((data: {code: string, auth: string}) => postCaseCode(data.code, data.auth), {
  onSuccess: (res) => {
    toast("승인되었습니다.")
    if(setInterviewId) { 
      postInterviewCreate(res.data, auth).then((response) => {
      setInterviewId(response.data)
    })
    }
    setIsModalOpen(false);
  },
  onError: (error: AxiosError<TCaseCodeRes>) => {
    if (error.response) {
      setIsModalOpen(true);
      toast.error(error.response.data.reason);
    }
  }
});

  const navigate = useNavigate();
  const closeModal = () => {
    // userCode를 입력하지 않았을 때 에러처리
    if (input && !userCode) {
      toast.error('사용자 코드를 입력하세요.');
      return;
    }
    setIsModalOpen(false);
    if (userCode && !navigateUrl) {
      codeCheck({ code: userCode, auth });
    }
    if (!input && navigateUrl) {
      setIsModalOpen(false);
      navigate(`${navigateUrl}`);
    }
  }

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
      setIsModalOpen(false);
  });

  return (
    <>
    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeModal}></div>

    <div className="flex flex-col bg-white w-full max-w-450 h-140 px-20 drop-shadow-lg rounded-20 absolute ml-20 left-1/3 top-1/4 z-50">
      <div className="flex justify-between py-25">
        <div className="font-semibold">{text}</div>
        <button onClick={closeModal}>x</button>
      </div>
      <div className="flex justify-end">
        {input? 
        <div className="flex">
          {setUserCode && <input className="rounded-12 border w-340 mr-20 h-40 px-10" onChange={(e) => setUserCode(e.target.value)}></input>}
          <button className="bg-mainColor text-white text-13 px-13 py-10 rounded-13" onClick={closeModal}>확인</button>
        </div> :
        <button className="bg-mainColor text-white text-13 px-13 py-10 rounded-13 ml-18" onClick={closeModal}>확인</button>
        }
      </div>
    </div>
    </>
  ) 
}

export default Modal;
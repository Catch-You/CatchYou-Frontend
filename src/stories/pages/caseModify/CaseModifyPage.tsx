import { useState } from "react";
import Title from "../../atoms/title";
import Selector from "../../molecules/selector";
import TextArea from "../../molecules/textarea";
import Modal from "../../atoms/modal";
import { useLocation } from "react-router-dom";
import { TCaseForm } from "../../../types/case/caseList";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil";
import { useMutation } from "react-query";
import { putCase } from "../../../api/caseApi";
import { AxiosError } from "axios";
import { TCaseCodeRes } from "../../../types/case/caseManage";
import toast from "react-hot-toast";

const CaseModifyPage = () => {

  const location = useLocation();
  const caseDetail = location.state.caseDetail
  const caseId = location.state.caseId

  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = useRecoilValue(userState);
  const [status, setStatus] = useState<string>('N')

  const form: TCaseForm = {
    title: caseDetail.title,
    region: caseDetail.region,
    crimeType: caseDetail.crimeType,
    description: caseDetail.description,
    summary: caseDetail.summary,
  }

  const [caseForm, setCaseForm] = useState<TCaseForm>(form)

  // server
  const { mutate: caseModify } = useMutation(() => putCase({...caseForm, status}, caseId, auth), { 
    onSuccess: () => {
      setIsModalOpen(true);
    },
    onError: (error: AxiosError<TCaseCodeRes>) => {
    if (error.response) {
      toast.error(error.response.data.reason);
    }
  }
  });
  const handleRegister = () => {
    caseModify();
  }


  return (
    <div className="flex justify-center">
      {isModalOpen && <Modal navigateUrl="/" text={"사건이 수정되었습니다."} input={false} setIsModalOpen={setIsModalOpen}/>}
      <div className="bg-white w-full max-w-748 h-full max-h-fit rounded-20 py-20 px-50 mt-30">
        <div className="mt-20"><Title text="사건 등록" /></div>
        <div className="mt-30">
          <TextArea text="사건 제목을 입력하세요." rows={1} placeholder="어금니 아빠 사건" maxInput={20} type={2} setCaseForm={setCaseForm} value={caseForm.title}  />
        </div>
        <div className="mt-15"><Selector text="시민 공개범위를 선택하세요." options={["비공개","공개"]} type={0} status={status} setStatus={setStatus} /></div>
        <div className="mt-20 flex gap-20">
          <Selector text="사건 발생 지역을 선택하세요." options={["서울","인천","경기"]} type={1} caseForm={caseForm} setCaseForm={setCaseForm} selectedValue={caseForm.region} />
          <Selector text="범죄 종류를 선택하세요." options={["살인","성범죄","절도범죄","폭력범죄"]} type={2} caseForm={caseForm} setCaseForm={setCaseForm} selectedValue={caseForm.crimeType} />
        </div>
        <div className="mt-20">
          <TextArea text="인상 착의를 설명해주세요." rows={3} placeholder="20대 중반~30대 초반 남자, 178 가량. 건장한 체격. 상의 흰색 와이셔츠, 검은색 모자를 눌러씀, 구두 착용" maxInput={200} type={0} caseForm={caseForm} setCaseForm={setCaseForm} value={caseForm.description}  />
        </div>
        <div className="mt-20">
          <TextArea text="사건 개요를 설명하세요." rows={5} placeholder="대전 서구 둔산동 00아파트에 거주하는 초등학생 여자 아이를 납치하여 피해자 주거지 옥상 기계실에 감금 후, 살해" maxInput={350} type={1} caseForm={caseForm} setCaseForm={setCaseForm} value={caseForm.summary}  />
        </div>
        <div className="flex justify-end"><button onClick={handleRegister} className="text-white bg-mainColor px-35 py-10 rounded-16 my-20">등록하기</button></div>
      </div>
    </div>
  )
}

export default CaseModifyPage;
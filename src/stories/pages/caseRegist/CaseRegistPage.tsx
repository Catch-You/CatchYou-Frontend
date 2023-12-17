import { useState } from "react";
import Title from "../../atoms/title";
import Selector from "../../molecules/selector";
import TextArea from "../../molecules/textarea";
import Modal from "../../atoms/modal";
import { postCase } from "../../../api/caseApi";
import { useMutation } from "react-query";
import { TYPE_OF_CRIME, TYPE_OF_REGION } from "../../../constants/case";

export type TCaseForm = { 
  title: string,
  open?: boolean,
  region: string,
  type: string,
  impressive: string,
  overview: string,
}

const CaseRegistPage = () => {
  
  const regionOptions = Object.values(TYPE_OF_REGION);
  const criminalOptions = Object.values(TYPE_OF_CRIME)

  const [caseForm, setCaseForm] = useState<TCaseForm>({
    title: '',
    open: false,
    region: '',
    type: '',
    impressive: '',
    overview: '',
  })

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = () => {
    setIsModalOpen(true);
    caseRegist({title: caseForm.title, summary: caseForm.overview, description: caseForm.impressive, region:caseForm.region, crimeType: caseForm.type})
  }

  // server
  const { mutate: caseRegist } = useMutation(postCase);

  return (
    <div className="flex justify-center">
      {isModalOpen && <Modal navigateUrl="/" text={"사건이 등록됐습니다."} input={false} setIsModalOpen={setIsModalOpen} />}
      <div className="bg-white w-full max-w-748 h-full max-h-fit rounded-20 py-20 px-50 mt-30">
        <div className="mt-20"><Title text="사건 등록" /></div>
        <div className="mt-30">
          <TextArea text="사건 제목을 입력하세요." rows={1} placeholder="어금니 아빠 사건" maxInput={20} type={2} caseForm={caseForm} setCaseForm={setCaseForm}  />
        </div>
        <div className="mt-20 flex gap-20">
          <Selector text="사건 발생 지역을 선택하세요." options={regionOptions} type={1} caseForm={caseForm} setCaseForm={setCaseForm} />
          <Selector text="범죄 종류를 선택하세요." options={criminalOptions} type={2} caseForm={caseForm} setCaseForm={setCaseForm} />
        </div>
        <div className="mt-20">
          <TextArea text="인상 착의를 설명해주세요." rows={3} placeholder="20대 중반~30대 초반 남자, 178 가량. 건장한 체격. 상의 흰색 와이셔츠, 검은색 모자를 눌러씀, 구두 착용" maxInput={200} type={0} caseForm={caseForm} setCaseForm={setCaseForm}  />
        </div>
        <div className="mt-20">
          <TextArea text="사건 개요를 설명하세요." rows={5} placeholder="대전 서구 둔산동 00아파트에 거주하는 초등학생 여자 아이를 납치하여 피해자 주거지 옥상 기계실에 감금 후, 살해" maxInput={350} type={1} caseForm={caseForm} setCaseForm={setCaseForm}  />
        </div>
        <div className="flex justify-end"><button onClick={handleRegister} className="text-white bg-mainColor px-35 py-10 rounded-16 my-20">등록하기</button></div>
      </div>
    </div>
  )
}

export default CaseRegistPage;
import { useState } from "react";
import Title from "../../atoms/title";
import Selector from "../../molecules/selector";
import TextArea from "../../molecules/textarea";

export type TCaseForm = { 
  open: boolean,
  region: string,
  type: string,
  impressive: string,
  overview: string,
}

const CaseRegistPage = () => {

  const [caseForm, setCaseForm] = useState<TCaseForm>({
    open: false,
    region: '',
    type: '',
    impressive: '',
    overview: '',
  })

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full max-w-748 h-full max-h-fit rounded-20 py-20 px-50 mt-30">
        <div className="mt-20"><Title text="사건 등록" /></div>
        <div className="mt-30"><Selector text="시민 공개범위를 선택하세요." options={["비공개","공개"]} type={0} caseForm={caseForm} setCaseForm={setCaseForm} /></div>
        <div className="mt-20 flex gap-20">
          <Selector text="사건 발생 지역을 선택하세요." options={["서울","인천","경기"]} type={1} caseForm={caseForm} setCaseForm={setCaseForm} />
          <Selector text="범죄 종류를 선택하세요." options={["살인","성범죄","절도범죄","폭력범죄"]} type={2} caseForm={caseForm} setCaseForm={setCaseForm} />
        </div>
        <div className="mt-20">
          <TextArea text="인상 착의를 설명해주세요." rows={3} placeholder="20대 중반~30대 초반 남자, 178 가량. 건장한 체격. 상의 흰색 와이셔츠, 검은색 모자를 눌러씀, 구두 착용" maxInput={200} type={0} caseForm={caseForm} setCaseForm={setCaseForm}  />
        </div>
        <div className="mt-20">
          <TextArea text="사건 개요를 설명하세요." rows={5} placeholder="대전 서구 둔산동 00아파트에 거주하는 초등학생 여자 아이를 납치하여 피해자 주거지 옥상 기계실에 감금 후, 살해" maxInput={350} type={1} caseForm={caseForm} setCaseForm={setCaseForm}  />
        </div>
        <div className="flex justify-end"><button className="text-white bg-mainColor px-35 py-10 rounded-16 my-20">등록하기</button></div>
      </div>
    </div>
  )
}

export default CaseRegistPage;
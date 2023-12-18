import { useState } from "react";
import CommonBtn from "../../atoms/commonBtn";
import InfoCard from "../../atoms/infoCard";
import Modal from "../../atoms/modal";
import { useGetMontageAll } from "../../../hooks/queries/montage/montageQueries";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil";
import { useLocation } from "react-router-dom";

const MontageFirmUp = () => {
  const auth = useRecoilValue(userState)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const location = useLocation();
  const interviewId = location.state.interviewId

  // server
  const {data: montageAll } = useGetMontageAll(interviewId, auth)

  const handleFirmUp = () => {
    setIsModalOpen(true);
  }
  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(true)
  }

  const handleFirmMontage = (montageId: number) => {
    setSelectedId(montageId);
    console.log("선택한 아이디", selectedId)
  }

  return(
    <div className="ml-70">
      {isConfirmModalOpen && <Modal text={"확정되었습니다!"} input={false} setIsModalOpen={setIsConfirmModalOpen}/>}
      {isModalOpen && <Modal text={"몽타주를 확정하시겠습니까?"} input={false} setIsModalOpen={handleConfirm} navigateUrl={"/mypage"}/>}
      <div className="text-center text-20 font-semibold mt-10">몽타주 후보군</div>
      {montageAll && montageAll.map((montage) => (
        <div key={`${montage.id} ${interviewId}`} className="mt-30" onClick={() => handleFirmMontage(montage.id)}>
          <div className="flex flex-wrap gap-10">
            <InfoCard key={`${montage.id} ${interviewId} c`} montageId={montage.id}/>
          </div>
        </div>
      ))}
      <span className="flex j mt-10 mb-10"><CommonBtn text="몽타주 확정하기" onClick={handleFirmUp} /></span>
    </div>
  )
}

export default MontageFirmUp;
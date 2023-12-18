import { useEffect, useState } from "react";
import CommonBtn from "../../atoms/commonBtn";
import InfoCard from "../../atoms/infoCard";
import Modal from "../../atoms/modal";
import { useGetMontageAll } from "../../../hooks/queries/montage/montageQueries";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil";
import { useLocation } from "react-router-dom";
import { postFinalMontage } from "../../../api/montageApi";

const MontageFirmUp = () => {
  const auth = useRecoilValue(userState)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const location = useLocation();
  const interviewId = location.state.interviewId

  useEffect(() => {
  console.log("선택한 아이디", selectedId);
  }, [selectedId]);

  // server
  const {data: montageAll } = useGetMontageAll(interviewId, auth)
  const firmUpSelectMontage = (interviewId: number, selectedId: number, auth: string) => postFinalMontage(interviewId, selectedId, auth);

  const handleFirmUp = () => {
    setIsModalOpen(true);
  }
  const handleConfirm = () => {
    setIsModalOpen(false);
    firmUpSelectMontage(interviewId, selectedId, auth);
    setIsConfirmModalOpen(true)
  }
  const handleFirmMontage = (montageId: number) => {
    setSelectedId(montageId);
  }

  return(
    <div className="ml-70">
      
      {isConfirmModalOpen && <Modal text={"확정되었습니다!"} input={false} setIsModalOpen={setIsConfirmModalOpen} navigateUrl={"/mypage"}/>}
      {isModalOpen && <Modal text={"몽타주를 확정하시겠습니까?"} input={false} setIsModalOpen={handleConfirm} />}
      <div className="text-center text-20 font-semibold mt-10">몽타주 후보군</div>
      {montageAll && montageAll.map((montage) => (
        <div key={`${montage.id} ${interviewId}`} className="mt-30">
          <div className="flex flex-wrap gap-10"  onClick={() => handleFirmMontage(montage.id)}>
            <InfoCard key={`${montage.id} ${interviewId} c`} montageId={montage.id}/>
          </div>
        </div>
      ))}
      <span className="flex j mt-10 mb-10"><CommonBtn text="몽타주 확정하기" onClick={handleFirmUp} /></span>
    </div>
  )
}

export default MontageFirmUp;
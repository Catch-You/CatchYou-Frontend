import { useEffect, useState } from "react";
import CommonBtn from "../../atoms/commonBtn";
import InfoCard from "../../atoms/infoCard";
import Modal from "../../atoms/modal";
import { useGetMontageAll } from "../../../hooks/queries/montage/montageQueries";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil";
import { useLocation } from "react-router-dom";
import { postFinalMontage, postMyFinalMontage } from "../../../api/montageApi";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { TCaseCodeRes } from "../../../types/case/caseManage";

const MontageFirmUp = () => {
  const auth = useRecoilValue(userState)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const location = useLocation();
  const interviewId = location.state.interviewId
  const caseId = location.state.caseId
  const montages = location.state.montages
  console.log("mononononon", location.state.montages)

  useEffect(() => {
  console.log("선택한 아이디", selectedId);
  }, [selectedId]);

  // server
  const {data: montageAll } = useGetMontageAll(interviewId, auth)
  const firmUpSelectMontage = (interviewId: number, selectedId: number, auth: string) => postFinalMontage(interviewId, selectedId, auth);
  const firmUpMySelectMontage = (caseId: number, selectedId: number, auth: string) => postMyFinalMontage(caseId, selectedId, auth);

  useEffect(()=> {

  },[selectedId])

  const handleFirmUp = () => {
    setIsModalOpen(true);
  }
  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(true)
    try {
      if (montages && caseId) {
        firmUpMySelectMontage(caseId, selectedId, auth);
      } else {
        firmUpSelectMontage(interviewId, selectedId, auth);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
      const axiosError = err as AxiosError<TCaseCodeRes>;
      if (axiosError && axiosError.response) {
        toast.error(axiosError.response.data.reason);
      }
    }
}
  }
  const handleFirmMontage = (montageId: number) => {
    setSelectedId(montageId);
  }

  return(
    <div className="ml-70">
      {isConfirmModalOpen && <Modal text={"확정되었습니다!"} input={false} setIsModalOpen={setIsConfirmModalOpen} navigateUrl={"/my"}/>}
      {isModalOpen && <Modal text={"몽타주를 확정하시겠습니까?"} input={false} setIsModalOpen={handleConfirm} />}
      <div className="text-center text-20 font-semibold mt-50">몽타주 후보군</div>
      <div className="flex gap-10">
      {!montages && montageAll && montageAll.map((montage) => (
        <div key={`${montage.id} ${interviewId}`} className="mt-30">
          <div className="flex flex-wrap gap-10 cursor-pointer" onClick={() => handleFirmMontage(montage.id)}>
            <InfoCard key={`${montage.id} ${interviewId} c`} montageId={montage.id} selectedId={selectedId}/>
          </div>
        </div>
      ))}
      {montages && montages.map((montage) => (
        <div key={`${montage.id} ${interviewId}`} className="mt-30">
          <div className="flex flex-wrap gap-10 cursor-pointer" onClick={() => handleFirmMontage(montage.id)}>
            <InfoCard key={`${montage.id} ${interviewId} c`} montageId={montage.id} selectedId={selectedId}/>
          </div>
        </div>
      ))}
      </div>
      <span className="flex justify-center mt-160 mb-10"><CommonBtn text="몽타주 확정하기" onClick={handleFirmUp} /></span>
    </div>
  )
}

export default MontageFirmUp;
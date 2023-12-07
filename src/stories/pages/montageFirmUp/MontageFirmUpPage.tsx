import { useState } from "react";
import { montageMock } from "../../../mocks/montagePublic/montageCard";
import CommonBtn from "../../atoms/commonBtn";
import InfoCard from "../../atoms/infoCard";
import Modal from "../../atoms/modal";

const MontageFirmUp = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);


  const handleFirmUp = () => {
    setIsModalOpen(true);
  }
  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(true)
  }

  return(
    <div className="ml-70">
      {isConfirmModalOpen && <Modal text={"확정되었습니다!"} input={false} setIsModalOpen={setIsConfirmModalOpen}/>}
      {isModalOpen && <Modal text={"몽타주를 확정하시겠습니까?"} input={false} setIsModalOpen={handleConfirm}/>}
      <div className="text-center text-20 font-semibold mt-10">몽타주 후보군</div>
      {montageMock.map((montage) => (
        <div key={montage.crimeId} className="mt-30">
          <div className="flex flex-wrap gap-10">
            {montage.criminals.map((info) => (
              <InfoCard key={info.id} imgSrc={info.imgSrc} id={info.id} />
            ))}
          </div>
        </div>
      ))}
      <span className="flex justify-center mt-10 mb-10"><CommonBtn text="몽타주 확정하기" onClick={handleFirmUp} /></span>
    </div>
  )
}

export default MontageFirmUp;
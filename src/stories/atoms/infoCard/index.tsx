import { useNavigate } from "react-router-dom";

type TInfoCard = {
  montageId: number;
  caseId?: number;
  title?: string;
  selectedId?: number | null;
}

const InfoCard = ({montageId, caseId, title, selectedId}: TInfoCard) => {
  const navigate = useNavigate();
  const handleClick = ()  => {
    if (title) {
      navigate(`/${caseId}`)
    }
  }
  return (
    <div className="w-200 h-180 rounded-lg bg-white flex flex-col mb-50 " >
      <div onClick={handleClick} className={selectedId !== 0 ? "focus:border-2 focus:border-mainColor" : "first-letter:"}>
        <img className={title? "rounded-t-lg object-fill" : (selectedId? "rounded-lg border-4 border-subColor":"rounded-lg")} src={`https://diffusion-ml.s3.ap-northeast-2.amazonaws.com/${montageId}.png`} width={200} height={200} /> 
      </div>
      {title && (<div className="text-center text-16 py-8 bg-white rounded-b-lg">{title}</div>)}
    </div>
  )
}

export default InfoCard;
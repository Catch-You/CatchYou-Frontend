import { useNavigate } from "react-router-dom";

type TInfoCard = {
  montageId: number;
  caseId?: number;
  title?: string;
}

const InfoCard = ({montageId, caseId, title}: TInfoCard) => {
  const navigate = useNavigate();
  const handleClick = ()  => {
    navigate(`/${caseId}`)
  }
  return (
    <div className="w-200 h-200 rounded-lg bg-white flex flex-col mb-50" onClick={handleClick}>
      <img className={title? "rounded-t-lg object-fill" : "rounded-lg"} src={`https://diffusion-ml.s3.ap-northeast-2.amazonaws.com/${montageId}.png`} width={200} height={200} />
      {title && (<div className="text-center text-16 py-8 bg-white rounded-b-lg">{title}</div>)}
    </div>
  )
}

export default InfoCard;
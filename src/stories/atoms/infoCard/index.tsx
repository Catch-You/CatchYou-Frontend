import { useNavigate } from "react-router-dom";

type TInfoCard = {
  imgSrc: string;
  id: number;
}

const InfoCard = ({imgSrc, id}: TInfoCard) => {
  const navigate = useNavigate();
  const handleClick = ()  => {
    navigate(`/${id}`)
  }
  return (
    <div className="w-200 h-200 rounded-lg bg-white flex flex-col" onClick={handleClick}>
      <img className="rounded-lg object-fill" src={imgSrc} width={200} height={200} />
      {/* {name && age && (<div className="text-center text-16 pt-10">{name} / {age? `${age}`: '?'}세</div>)} */}
    </div>
  )
}

export default InfoCard;
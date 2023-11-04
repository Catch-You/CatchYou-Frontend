type TInfoCard = {
  name: string;
  age?: number;
  imgSrc: string;
}

const InfoCard = ({name, age, imgSrc}: TInfoCard) => {
  return (
    <div className="h-240 w-190 rounded-lg bg-white flex flex-col">
      <img className="rounded-t-lg" src={imgSrc} width={230} height={200} />
      <div className="text-center text-16 pt-10">{name} / {age? `${age}`: '?'}세</div>
    </div>
  )
}

export default InfoCard;
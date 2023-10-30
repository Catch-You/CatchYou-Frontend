type TInfoCard = {
  name: string;
  age?: number;
  imgSrc: string;
}

const InfoCard = ({name, age, imgSrc}: TInfoCard) => {
  return (
    <div className="h-280 w-230 border rounded-b-lg">
      <img className="rounded-t-lg" src={imgSrc} width={230} height={200} />
      <div className="text-center text-16 pt-10">{name} / {age? `${age}`: '?'}세</div>
    </div>
  )
}

export default InfoCard;
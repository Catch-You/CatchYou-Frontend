import Category from "../../atoms/category"
import InfoCard from "../../atoms/infoCard"
import { montageMock } from "../../../mocks/montagePublic/montageCard"

const MontagePublicPage = () => {
  return(
    <div>
      <div className="mt-20"><Category /></div>
      {montageMock.map((montage) => (
        <div key={montage.crimeId}>
          <div className="text-20 font-semibold text-white mt-30 mb-20">{montage.crimeCategory}</div>
          <div className="flex flex-wrap gap-20">
            {montage.criminals.map((info) => (
              <InfoCard key={info.id} imgSrc={info.imgSrc} id={info.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MontagePublicPage
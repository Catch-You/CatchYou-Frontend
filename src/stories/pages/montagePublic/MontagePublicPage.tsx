import Category from "../../atoms/category"
import { useGetMontagePublic } from "../../../hooks/queries/montage/montageQueries"
import InfoCard from "../../atoms/infoCard"
import { TMontageCrime } from "../../../types/montage/montagePublic"
import { TYPE_OF_CRIME } from "../../../constants/case"
import { useEffect, useState } from "react"

const MontagePublicPage = () => {

  // 현재 지역
  const [region, setRegion] = useState("")
  // server
  const { data: montages, refetch } = useGetMontagePublic(region);

  // 지역이 변경될 때 데이터 refetch
  useEffect(() => {
    const fetchData = async () => {
      await refetch();
    };
    fetchData();
  }, [region, montages]);

  return(
    <>
      <div className="mt-20"><Category setRegion={setRegion} /></div> 
      {montages && Object.entries(montages).map(([crimeType, cases]) => {
      if (Array.isArray(cases) && cases.length > 0) {
        return (
          <div key={crimeType}>
            {cases && <div className="text-20 font-semibold text-white mt-30 mb-20">{TYPE_OF_CRIME[crimeType.toUpperCase() as keyof typeof TYPE_OF_CRIME]}</div>}
            <div className="flex flex-wrap gap-20">
              {cases && cases.map((caseInfo: TMontageCrime) => (
                <InfoCard key={`${caseInfo.region}${caseInfo.id}`} montageId={caseInfo.montageId} caseId={caseInfo.id} title={caseInfo.title} />
              ))}
            </div>
          </div>
        );
      }
      return null;
    })}
    </>
  )
}

export default MontagePublicPage
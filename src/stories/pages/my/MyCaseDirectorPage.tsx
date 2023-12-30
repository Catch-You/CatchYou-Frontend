import { useLocation, useNavigate } from "react-router-dom";
import { createDate } from "../../../utils/datepick";

const MyCaseDirectorPage = () => {
  const location = useLocation();
  const navigator = useNavigate()
  const caseDetail = location.state.caseDetail
  const title = caseDetail.detailsDto.selectStatus === "N" ? (caseDetail.montages.length === 0 ? '몽타주 제작 전' : '몽타주 확정 전') : '몽타주 확정'

  return (
    <div className="flex justify-center">
      {caseDetail && (
      <div className="bg-white w-full max-w-900 h-full max-h-fit rounded-20 py-20 px-50 mt-30">
        <div className="flex items-center gap-4">
          <div className="text-white text-19 bg-mainColor w-fit px-20 py-4 rounded-15">{title}</div>
          <div className="w-fit px-20 py-4 border-superSubColor rounded-15 border-2">{caseDetail.detailsDto.status === "Y"? "공개" : "비공개"}</div>
        </div>
        <div className='flex items-center justify-between mt-20'>
          <div className='flex gap-4'>
            <div className='text-mainColor font-semibold text-19 bg-superSubColor w-fit px-20 py-4 rounded-15'>{caseDetail.detailsDto.title}</div>
            <span className='mt-5 text-mainColor'>| {caseDetail.detailsDto.region}</span>
          </div>
          <span className="flex justify-end text-mainColor text-15">작성일: {createDate(caseDetail.detailsDto.updatedAt)}</span>
        </div>
        <div className="flex gap-8 mt-20">
          {caseDetail.detailsDto.montageId && <div className="montage" style={{ backgroundImage: `url(https://diffusion-ml.s3.ap-northeast-2.amazonaws.com/${caseDetail.detailsDto.montageId}.png)`, width: 220, height: 270, marginTop: 35 }}><div className='criminalType'>{caseDetail.detailsDto.crimeType}</div></div>} 
        <div>
        {caseDetail.detailsDto.userName && 
        <>
          <div className='text-mainColor font-semibold text-20'>담당 경찰관</div>
          <div className='mt-5 border-2 border-superSubColor w-full h-60 rounded-12 px-14 py-16'>
            {caseDetail.detailsDto.userName}
          </div>
        </>}
        <div className='text-mainColor font-semibold text-20 mt-20'>인상착의</div>
        <div className='mt-5 border-2 border-superSubColor w-360 h-155 rounded-12 px-14 py-16'>
          {caseDetail.detailsDto.description}
        </div>
      </div>
    </div>
      <>
        <div className='text-mainColor font-semibold text-20 mt-20'>사건개요</div>
        <div className='mt-5 border-2 border-superSubColor w-full h-110 rounded-12 px-14 py-16 mb-10'>
          {caseDetail.detailsDto.summary}
        </div>
      </>
      {caseDetail.montages && caseDetail.montages.length > 0 && 
        <div className="text-white text-19 bg-mainColor w-fit px-20 py-4 rounded-15 mt-20" onClick={() => navigator('/firmUpMontage', {state: {caseId: caseDetail.detailsDto.id, montages: caseDetail.montages}})}>몽타주 확정 페이지로 이동</div>}
      </div>)}
    </div>
  )
}

export default MyCaseDirectorPage;
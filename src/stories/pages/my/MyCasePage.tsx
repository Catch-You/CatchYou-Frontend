import { useLocation } from "react-router-dom";
import { createDate } from "../../../utils/datepick";

const MyCasePage = () => {
  const location = useLocation();
  const caseDetail = location.state.caseDetail
  const title = caseDetail.directorId? (caseDetail.montageId ? '확정된 사건' : '제작자를 배정 받은 사건') : '제작자를 배정 받지 않은 사건';

  return (
    <div className="flex justify-center">
      {caseDetail && (
      <div className="bg-white w-full max-w-900 h-full max-h-fit rounded-20 py-20 px-50 ">
        <div className="flex items-center gap-4">
          <div className="text-white text-19 bg-mainColor w-fit px-20 py-4 rounded-15">{title}</div>
          <div className="w-fit px-20 py-4 border-superSubColor rounded-15 border-2">{caseDetail.status === "Y"? "공개" : "비공개"}</div>
        </div>
        <div className='flex items-center justify-between mt-20'>
          <div className='flex gap-4'>
            <div className='text-mainColor font-semibold text-19 bg-superSubColor w-fit px-20 py-4 rounded-15'>{caseDetail.title}</div>
            <span className='mt-5 text-mainColor'>| {caseDetail.region}</span>
          </div>
          <span className="flex justify-end text-mainColor text-15">작성일: {createDate(caseDetail.updatedAt)}</span>
        </div>
        <div className="flex gap-8 mt-20">
          {caseDetail.montageId && <div className="montage" style={{ backgroundImage: `url(https://diffusion-ml.s3.ap-northeast-2.amazonaws.com/${caseDetail.montageId}.png)`, width: 220, height: 220 }}><div className='criminalType'>{caseDetail.crimeType}</div></div>} 
        <div>
        {caseDetail.directorId && 
        <>
          <div className='text-mainColor font-semibold text-20'>제작자</div>
          <div className='mt-5 border-2 border-superSubColor w-full h-60 rounded-12 px-14 py-16'>
            {caseDetail.directorName}
          </div>
        </>}
        <div className='text-mainColor font-semibold text-20 mt-20'>인상착의</div>
        <div className='mt-5 border-2 border-superSubColor w-360 h-185 rounded-12 px-14 py-16'>
          {caseDetail.description}
        </div>
      </div>
    </div>
      <>
        <div className='text-mainColor font-semibold text-20 mt-20'>사건개요</div>
        <div className='mt-5 border-2 border-superSubColor w-full h-140 rounded-12 px-14 py-16 mb-10'>
          {caseDetail.summary}
        </div>
      </>
      </div>)}
    </div>
  )
}

export default MyCasePage;
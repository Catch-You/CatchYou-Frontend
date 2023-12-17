import { useNavigate, useParams } from 'react-router-dom';
import CommonBtn from '../../atoms/commonBtn';
import './styles.css'
import { useGetMontageDetail } from '../../../hooks/queries/montage/montageQueries';

const CaseDetailPage = () => {

  const navigate = useNavigate();
  const { id: caseId } = useParams();

  //server
  const { data: caseDetail } = useGetMontageDetail(Number(caseId));

  // 작성날짜만을 뽑아내는 정규식
  const createDate = (date: string) => {
    const match = date.match(/^(\d{4}-\d{2}-\d{2})/);
    return match && match[1];
  }

  return (
    <div className="flex justify-center">
      {caseDetail && (
      <div className="bg-white  w-full max-w-748 h-full max-h-fit rounded-20 py-20 px-50 mt-30">
        <div className='flex items-center justify-between mt-20'>
          <div className='flex gap-4'>
            <div className='text-mainColor font-semibold text-19 bg-superSubColor w-fit px-20 py-4 rounded-15'>{caseDetail.title}</div>
            <span className='mt-5 text-mainColor'>| {caseDetail.region}</span>
          </div>
          <span className="flex justify-end text-mainColor text-15">작성일: {createDate(caseDetail.updatedAt)}</span>
        </div>
        
        <div className="flex gap-8 mt-20">
          <div className="montage" style={{ backgroundImage: `url(https://diffusion-ml.s3.ap-northeast-2.amazonaws.com/${caseDetail.montageId}.png)` }}><div className='criminalType'>{caseDetail.crimeType}</div></div>
          <div>
            <div className='text-mainColor font-semibold text-20'>인상착의</div>
            <div className='mt-5 border-2 border-superSubColor w-360 h-215 rounded-12 px-14 py-16'>
              {caseDetail.description}
            </div>
          </div>
        </div>
        <div>
          <div className='text-mainColor font-semibold text-20 mt-20'>사건개요</div>
          <div className='mt-5 border-2 border-superSubColor w-full h-140 rounded-12 px-14 py-16'>
            {caseDetail.summary}
          </div>
        </div>
        <div className="flex justify-end mt-10"><CommonBtn text="수정하기" onClick={() => navigate(`modifyCase`)} /></div>
      </div>)}
    </div>
  )
}

export default CaseDetailPage;
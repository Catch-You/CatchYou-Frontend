import CommonBtn from '../../atoms/commonBtn';
import './styles.css'

const CaseDetailPage = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white  w-full max-w-748 h-full max-h-fit rounded-20 py-20 px-50 mt-30">
        <div className="flex gap-8 mt-20">
          <div className="montage"><div className='region'>서울</div></div>
          <div>
            <div className='text-mainColor font-semibold text-20'>인상착의</div>
            <div className='mt-5 border-2 border-superSubColor w-full max-w-360 h-215 rounded-12 px-14 py-16'>
              넌 잠에 드는 법도 모른 채 밤을 걷지
              언제부터 넌 너를 속이고 밝게 웃지
              아무도 너의 슬픔을 알아주지 않지
              눈물을 감추기엔 네가 가여워서 못 버텨
            </div>
          </div>
        </div>
        <div>
          <div className='text-mainColor font-semibold text-20 mt-20'>사건개요</div>
          <div className='mt-5 border-2 border-superSubColor w-full h-140 rounded-12 px-14 py-16'>
            넌 잠에 드는 법도 모른 채 밤을 걷지
            언제부터 넌 너를 속이고 밝게 웃지
            아무도 너의 슬픔을 알아주지 않지
            눈물을 감추기엔 네가 가여워서 못 버텨
          </div>
        </div>
        <div className="flex justify-end mt-10"><CommonBtn text="수정하기" /></div>
      </div>
    </div>
  )
}

export default CaseDetailPage;
import  context  from '../../assets/context.png'
import TranslateBtn from '../../atoms/translateBtn';

const Header = () => {
  return (
    <div className='flex justify-between px-40 py-15 items-center bg-white'>
      <div className='flex gap-2'>
        <img src={context} width={40} height={40} />
        <div className='font-semibold text-23'> 그놈을 잡아라</div>
      </div>
      <div className='flex items-center gap-5'>
        <TranslateBtn />
        <div className='font-semibold text-16'>로그인</div>
      </div>
    </div>
  )
}

export default Header;
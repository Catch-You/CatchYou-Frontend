import { useRecoilValue } from 'recoil';
import  context  from '../../assets/context.png'
import TranslateBtn from '../../atoms/translateBtn';
import { userInfoState, userLoginState } from '../../../recoil';

const Header = () => {
  const isLoggedIn = useRecoilValue(userLoginState);

  const userInfo = useRecoilValue(userInfoState); 
  const role = userInfo.role === 'ROLE_POLICE' ? '경찰':'몽타주 전문가'

  return (
    <div className='flex justify-between px-40 py-15 items-center bg-white'>
      <a className='flex gap-2' href='/'>
        <img src={context} width={40} height={40} />
        <div  className='font-semibold text-23'> 그놈을 잡아라</div>
      </a>
      <div className='flex items-center gap-5'>
        <TranslateBtn />
        {isLoggedIn ? <div className='font-semibold text-16'>({role} / {userInfo.userName}님)</div> : <a href='/login' className='font-semibold text-16'>로그인</a>}
      </div>
    </div>
  )
}

export default Header;
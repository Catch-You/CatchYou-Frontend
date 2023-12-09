import { useNavigate } from "react-router-dom";
import SignMember from "../../organisms/signMember";
import { userRoleState } from "../../../recoil";
import { useRecoilState } from "recoil";

const SignMemberPage = () => {
  const navigate = useNavigate();
  const [, setUserRole] = useRecoilState(userRoleState); 

  const handleJoinClick = (police: boolean) => {
    const role = police ? "ROLE_POLICE" : "ROLE_DIRECTOR";
    setUserRole(role)
    navigate('/join')
  }
  return(
    <div className="justify-center items-center ">
      <div className="flex justify-center mt-100 gap-12">
        <SignMember title="경찰" subtitle="과학수사관리관, 수사국, 형사국" police={true} onClick={() => handleJoinClick(true)} />
        <SignMember title="몽타주 전문가" subtitle="몽타주 제작 전문가" police={false} onClick={() => handleJoinClick(false)} />
      </div>
    </div>
  )
}

export default SignMemberPage;
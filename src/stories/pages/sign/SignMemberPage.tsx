import { useNavigate } from "react-router-dom";
import SignMember from "../../organisms/signMember";

const SignMemberPage = () => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate('/join')
  }
  return(
    <div className="justify-center items-center ">
      <div className="flex justify-center mt-100 gap-12">
      <SignMember title="경찰" subtitle="과학수사관리관, 수사국, 형사국" police={true} onClick={handleJoinClick} />
      <SignMember title="몽타주 전문가" subtitle="몽타주 제작 전문가" police={false} onClick={handleJoinClick} />
      </div>
    </div>
  )
}

export default SignMemberPage;
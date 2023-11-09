import Title from "../../atoms/title";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import VisibilityIcon from '@mui/icons-material/Visibility';

type TSignMember = {
  title: string;
  subtitle: string;
  police: boolean;
  onClick: () => void;
}

const SignMember = ({title, subtitle, police, onClick}: TSignMember) => {
  return (
    <div className="text-center border rounded-20 p-40 w-full max-w-350 h-460 gap-2 bg-white" onClick={onClick}>
      <Title text={title} />
      <div className="text-grayColor text-15 mb-70">{subtitle}</div>
      {police? <LocalPoliceIcon style={{width: 120, height:120}} /> : <VisibilityIcon style={{width: 120, height:120}} />}
    </div>
  )
}

export default SignMember;
import Title from "../../atoms/title";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import DrawIcon from '@mui/icons-material/Draw';

type TSignMember = {
  title: string;
  subtitle: string;
  police: boolean;
  onClick: () => void;
}

const SignMember = ({title, subtitle, police, onClick}: TSignMember) => {
  return (
    <div className="text-center border rounded-20 p-40 w-full max-w-320 h-440 bg-white" onClick={onClick}>
      <Title text={title} />
      <div className="text-grayColor text-15 mb-70">{subtitle}</div>
      {police? <LocalPoliceIcon style={{width: 120, height:120}} /> : <DrawIcon style={{width: 120, height:120}} />}
    </div>
  )
}

export default SignMember;
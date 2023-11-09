import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type TNoticeMsg = {
  text: string;
  error: boolean;
}

const NoticeMsg = ({text, error = true}: TNoticeMsg) => {
  return (
    <div className={`flex items-center gap-2 py-16 px-13 rounded-17 `+(error? ' text-errorColor bg-errorSubColor': 'text-teal-600 bg-green-50')}>
      {error? <ErrorIcon /> : <CheckCircleOutlineIcon /> }
      <span>{text}</span>
    </div>
  )
}

export default NoticeMsg;
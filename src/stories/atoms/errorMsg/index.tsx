import ErrorIcon from '@mui/icons-material/Error';

type TErrorMsg = {
  text: string;
}

const ErrorMsg = ({text}: TErrorMsg) => {
  return (
    <div className='flex items-center gap-2 py-16 px-13 text-errorColor bg-errorSubColor rounded-17'>
      <ErrorIcon />
      <span>{text}</span>
    </div>
  )
}

export default ErrorMsg;
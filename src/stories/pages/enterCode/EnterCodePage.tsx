import ShortBtn from "../../atoms/shortBtn";
import Title from "../../atoms/title";
import Longfield from "../../molecules/longfield";


const EnterCodePage = () => {

  const handleCodeChange = () => {
    return;
  }

  return(
    <div className="flex justify-center mt-150">
      <div className="bg-white text-center rounded-20 px-40 pt-50 pb-70 w-full max-w-600">
        <Title text="범인 코드를 입력하세요." />
        <div className="flex justify-center gap-4 mt-45">
          <Longfield type="text" onChange={handleCodeChange} />
          <span className="mt-6"><ShortBtn text="Enter" activate={true} disabled={false} /></span>
        </div>
      </div>
    </div>
  )
}

export default EnterCodePage;
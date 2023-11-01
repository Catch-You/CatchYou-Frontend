import ShortBtn from "../../atoms/shortBtn";
import Title from "../../atoms/title";
import Longfield from "../../molecules/longfield";


const CodeInput = () => {
  return (
    <div className="text-center w-full max-w-600 h-full max-h-242 border px-40 pt-40 pb-50 rounded-20">
      <Title text="범인 코드를 입력하세요." />
      <form className="flex gap-2 items-center justify-center pt-45">
        <Longfield />
        <ShortBtn text="Enter" activate={true} />
      </form>
    </div>
  )
}

export default CodeInput;
type TTitle = {
  text: string
}

const Title = ({text}: TTitle) => {
  return(
    <div className="text-24 font-semibold">{text}</div>
  )
}

export default Title;
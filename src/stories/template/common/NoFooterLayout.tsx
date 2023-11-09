import Header from "../../molecules/header"
import { Outlet } from "react-router-dom";

const NoFooterLayout = () => {
  return (
    <div className="max-w-1440 min-h-screen h-full flex flex-col">
      <Header />
      <div className="flex flex-col flex-grow px-40 bg-mainColor pt-10 pb-50 min-h-screen"><Outlet /></div>
    </div>
  )
}

export default NoFooterLayout
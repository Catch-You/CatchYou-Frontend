import Footer from "../../molecules/footer";
import Header from "../../molecules/header";
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="max-w-1440 min-h-100vh flex flex-col">
      <Header />
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
      <div className="absolute bottom-0 w-full"><Footer /></div>
    </div>
  )
}

export default MainLayout;
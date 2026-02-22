import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Layout() {
  return (
    <>
        <Header />
        <div className="min-h-full flex flex-col items-center">
            <Outlet />
            <Footer />
        </div>
    </>
  )
}

export default Layout
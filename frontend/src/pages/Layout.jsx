import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Layout() {
  return (
    <>
        <Header />
        <div className="flex flex-col min-h-screen items-center">
            <Outlet />
            <Footer />
        </div>
    </>
  )
}

export default Layout
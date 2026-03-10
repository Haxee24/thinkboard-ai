import { Outlet } from "react-router"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Layout() {
    const colors = {
    blue: "bg-blue-700",
    yellow: "bg-yellow-700",
    red: "bg-red-700",
    purple: "bg-purple-700",
    green: "bg-green-700"
  }
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
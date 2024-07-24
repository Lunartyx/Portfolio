import { Outlet } from "react-router-dom";

//import Navbar from "./components/Navbar";

const App = () => {
  return (

    <div className="bg-custom-gradient min-h-screen">
      <div className="m-auto w-5/6">
        <Outlet />
      </div>
    </div>

  )
}

export default App

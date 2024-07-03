import { Outlet } from "react-router-dom";

//import Navbar from "./components/Navbar";

const App = () => {
  return (

    <div className="bg-custom-gradient min-h-screen p-2">
      <div className="m-auto w-5/6">
        <p>test</p>
        <Outlet />
      </div>
    </div>

  )
}

export default App

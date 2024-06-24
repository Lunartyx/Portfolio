import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="mt-2 mb-2 mx-auto w-5/6">
        <Navbar />

        <Outlet />
      </div>
    </>
  )
}

export default App

import routes from "./routes";
import { useRoutes } from "react-router";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';

function App() {

  const router = useRoutes(routes)

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  )
}

export default App

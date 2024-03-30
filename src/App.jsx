import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import ProductServices from "./Pages/ProductServices";
import EquipmentsService from "./Pages/Equpments";
import AutomaticGates from "./Pages/AutomaticGates";
import Terminals from "./Pages/Terminals";
import Serversv from "./Pages/Server.sv";
import ProjectService from "./Pages/ProjectService";
import System from "./Pages/System";
import NotFound from "./Pages/NotFound";
import InfoCampany from "./Pages/InfoCampany";
import AboutCampany from "./Pages/campany";
import Support from "./Pages/Support";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/products/terminals"} element={<Terminals />} />
        <Route path={"/products/ip-camera"} element={<ProductServices />} />
        <Route path={"/products/equipment"} element={<EquipmentsService />} />
        <Route path={"/products/automatic/gates"} element={<AutomaticGates />} />
        <Route path={"/products/terminal"} element={<Terminals />} />
        <Route path={"/products/software"} element={<Serversv />} />
        <Route path={"/products/project"} element={<ProjectService />} />
        <Route path={"/products/system"} element={<System />} />
        <Route path={"/partner/info"} element={<InfoCampany />} />
        <Route path={"/about/campany"} element={<AboutCampany />} />
        <Route path={"/support"} element={<Support />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import NotFound from "./Pages/NotFound";
import InfoCampany from "./Pages/InfoCampany";
import AboutCampany from "./Pages/campany";
import Support from "./Pages/Support";
import Programms from "./Pages/Programms";
import Products from "./Pages/Products";
import Product from "./Pages/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/partner/info"} element={<InfoCampany />} />
        <Route path={"/about/campany"} element={<AboutCampany />} />
        <Route path={"/support"} element={<Support />} />
        <Route path={"/programms"} element={<Programms />} />
        <Route path={"/product/:id"} element={<Product />} />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

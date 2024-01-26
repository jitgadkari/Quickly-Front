import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import SideBarContextProvider, { SideBarContext } from "./contexts/SideBarContext";

function App() {

  const sidebarcntxvalue= useContext(SideBarContext);
  return (
    <section className={`${sidebarcntxvalue.showSideBarExtenison ? " pl-[340px]" :" pl-[120px]"}`}>
    <SideBarContextProvider>
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
    </SideBarContextProvider>
    </section>
  );
}

export default App;

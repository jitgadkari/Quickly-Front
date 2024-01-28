import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import SideBarContextProvider, { SideBarContext } from "./contexts/SideBarContext";

function App() {

  const sidebarcntxvalue= useContext(SideBarContext);
  return (
    <section >
    <SideBarContextProvider>
    <BrowserRouter>
    <main className={`w-screen h-screen  flex flex-row flex-2:flex-grow overflow-auto relative`}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
      </Routes>
    </main>
    </BrowserRouter>
    </SideBarContextProvider>
    </section>
  );
}

export default App;

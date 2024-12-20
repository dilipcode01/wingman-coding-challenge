import React from "react";
import Sidebar from "./components/SideBar.jsx";

import { Buttons } from "./components/Buttons.jsx";
import { Cards } from "./components/Cards.jsx";
import { Forms } from "./components/Forms.jsx";
import { ChartsGraph } from "./components/Graphs.jsx";

const App = () =>{



  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 bg-white-100 p-8">
        <Buttons />

        <div class="border-t-2 mt-6 border-b-slate-400"></div>

        <div className="mt-2 max-w-10xl mx-auto p-6 bg-white rounded-lg shadow-lg pt-12">
          <Cards />

          <ChartsGraph />

          <Forms />
        </div>
      </div>
    </div>
  );
}

export default App;

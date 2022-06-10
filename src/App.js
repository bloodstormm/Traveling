import "./App.css";

import { BrowserRouter, Navigate } from "react-router-dom";
import RoutesContainer from "./components/RoutesContainer";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

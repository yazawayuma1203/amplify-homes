import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideMenuComponent from './pages/SideMenu';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <SideMenuComponent />
      <Routes>
        <Route path="/"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

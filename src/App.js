import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";

import SideMenuComponent from './pages/SideMenu';
import HomeCreateFormPage from './pages/HomeCreateFormPage';
import  UpperMenuComponent  from './pages/UpperMenu';
import './style.css';
import awsmobile from './aws-exports';

Amplify.configure({
  ...awsmobile,                               
  aws_appsync_authenticationType: "API_KEY",
});


function App() {
  return (
    <BrowserRouter>
      <SideMenuComponent />
      <UpperMenuComponent />
      <Routes>
        <Route path="/" element={<HomeCreateFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

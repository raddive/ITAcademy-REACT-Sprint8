import {React,useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route,Navigate, } from "react-router-dom";
import './css/App.css';
import './css/output.css'

import Landing from './pages/Landing';
import Main from './pages/Main';
import NoPage from './pages/NoPage';
import ShipDetails from './pages/ShipDetails';
import LoginRegister from './pages/LoginRegister';

function App() {

  const [userName,setUserName] = useState("");

  useEffect( () => {

  },[userName]);

  function logOut(){
    setUserName("");
  }

  function setUser(value){
    setUserName(value);
  }


  const ProtectedRoute = ({ userName, children }) => {
    if (userName==="") {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing userName={userName} setUser={setUser} logOut={logOut} />} />
        <Route path="/main" element={
            <ProtectedRoute userName={userName}>
              <Main userName={userName} setUser={setUser} logOut={logOut}/>
            </ProtectedRoute>
          }/>
        <Route path="/StarshipDetails" element={
            <ProtectedRoute userName={userName}>
              <ShipDetails userName={userName} setUser={setUser} logOut={logOut}/>
            </ProtectedRoute>
          }/>
        <Route path="/login" element={<LoginRegister type={1} userName={userName} setUser={setUser} logOut={logOut}/>} />
        <Route path="/register" element={<LoginRegister type={2} userName={userName} setUser={setUser} logOut={logOut}/>} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

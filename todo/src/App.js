import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route,useNavigate, useLocation } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Todos } from './components/Todos';

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() =>{
    if(isUserLoggedIn){
      if(pathname === "/login")  navigate("/");
      else navigate(pathname);
    }
    else{
      navigate("/login")
    }
  },[navigate, isUserLoggedIn, pathname])
  return (
    <div className="App">
      <div>
      <Navbar />
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="todo" element = {<Todos />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

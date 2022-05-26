import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route,useNavigate, useLocation } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Todos } from './components/Todos';
import { EditPage } from './components/EditPage';
import { Summary } from './components/Summary';

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  // useEffect(() =>{
  //   if(isUserLoggedIn){
  //     if(pathname === "/login")  navigate("/");
  //     else navigate(pathname);
  //   }
  //   else if(pathname === "/register") navigate("/login")
  //   else{
  //     navigate("/login")
  //   }
  // },[navigate, isUserLoggedIn, pathname])
  return (
    <div className="App">
      <div>
      <Navbar />
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path = "summary" element = {<Summary />}/>
        <Route path="todo" element = {<Todos />}/>
        <Route path = "todo/:id" element = {<EditPage />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

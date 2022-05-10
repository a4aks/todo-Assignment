import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Home } from './components/Home';

function App() {
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
      </Routes>
      </div>
    </div>
  );
}

export default App;

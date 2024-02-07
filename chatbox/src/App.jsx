import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import {Routes,Route } from 'react-router-dom'

function App() {
  return (
      <div>
       <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/Sign" element={<SignUp/>} />
     <Route path="/Home" element={<Home/>} />
    </Routes>
  </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Card from './components/Card'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>   
    </div>
  );
}


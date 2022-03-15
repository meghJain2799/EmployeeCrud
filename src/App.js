import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

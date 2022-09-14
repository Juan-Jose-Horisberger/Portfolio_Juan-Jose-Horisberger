import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
// import Navbar from './Components/Navbar/Navbar';

function App() {
   return (
      <div className="App">
         {console.log(process.env)}
         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>
      </div>
   );
}

export default App;

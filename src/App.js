import logo from './logo.svg';
import './styles/App.css';
import './styles/index.css'
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

/*
  
        
*/

export default App;

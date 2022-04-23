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
import Profile  from './pages/Profile';
import EditProfile from './pages/EditProfile';
function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editprofile" element={<EditProfile />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

/*
  
        
*/

export default App;

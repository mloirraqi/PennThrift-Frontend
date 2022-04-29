import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './styles/index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Store from './pages/Store';
import NewItem from './pages/NewItem';

function App() {
  const [loggedin, setLoggedin] = useState(null);

  function getAuthentication() {
    axios.post('/api/auth/').then((res) => {
      global.LOGGED_IN = res.data[0];
      setLoggedin(res.data[0]);
      global.USER = res.data[1];
    });
  }

  const ProtectedRoute = ({ redirectPath = '/login', children, h }) => {
    getAuthentication();
    if (loggedin != null) {
      if (!global.LOGGED_IN) {
        return <Navigate to={redirectPath} replace />;
      }
    }

    return children ? children : <Outlet />;
  };

  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="profile/edit" element={<EditProfile />} />
            <Route path="/store" element={<Store />} />
            <Route path="profile/newitem" element={<NewItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*
  
        
*/

export default App;

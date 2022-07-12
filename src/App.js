import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import BlogsPage from './pages/blogsPage/BlogsPage';
import UsersPage from './pages/userspage/UsersPage';
import Menu from './components/menu/Menu';
import LoginPage from './pages/loginPage/LoginPage';
import User from './components/user/User';
import Layout from './components/layout/Layout';
import LayoutBack from './components/layoutBack/LayoutBack';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>

        
        <Route path="/" element={<LayoutBack/>}>
          <Route path="users/:name" element = {<User/>} />

        </Route>
        

      </Routes>
       
    </BrowserRouter>
    
  );
}

export default App;

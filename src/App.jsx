import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Main';
import { Shop } from './pages/Shop';
import { LoginForm } from './pages/User/Login';
import { RegisterForm } from './pages/User/Register';
import './assets/styles/global.scss';
import { Posts } from './pages/Main/Posts';
import { Cart } from './pages/Cart';
import { UserPage } from './pages/User/Userpage';

function App() {
  const pathList = [
    '/',
    '/shop',
    '/about',
    '/blog',
    '/cart',
    '/login',
    '/register',
    '/user',
  ];
  return (
    <Router>
      <InnerApp pathList={pathList} />
    </Router>
  );
}

function InnerApp({ pathList }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="App">
      <div className="app-container">
        {pathList.includes(pathname) ? <Navbar /> : null}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Posts />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export { App };

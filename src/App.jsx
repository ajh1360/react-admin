import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminNavbar from './components/AdminNavbar';
import UserInfo from './pages/UserInfo';
import UserList from './pages/UserList';
import NoticeList from './pages/NoticeList';
import CreateNotice from './pages/NoticeWrite';
import Login from './pages/Login';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login logic
  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  // Render the login page if user is not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Main app layout when user is authenticated
  return (
    <div className="app-container">
      <AdminHeader />
      <div className="main-layout">
        <AdminNavbar />
        <div className="page-content">
          <Routes>
            {/* Default route, navigate to UserInfo */}
            <Route path="/" element={<Navigate to="/userinfo" />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/noticelist" element={<NoticeList />} />
            <Route path="/createnotice" element={<CreateNotice />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

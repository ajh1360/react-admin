import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/AdminNavbar.css';

const AdminNavbar = () => (
  <nav className="admin-navbar">
    <ul>
      <li><Link to="/userinfo">사용자 정보</Link></li>
      <li><Link to="/userlist">사용자 목록</Link></li>
      <li><Link to="/notices">공지사항 목록</Link></li>
      <li><Link to="/notices/create">공지사항 작성</Link></li>
    </ul>
  </nav>
);

export default AdminNavbar;
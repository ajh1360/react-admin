// src/AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => (
  <div className="sidebar">
    <h3>관리자 메뉴</h3>
    <nav>
      <ul>
        <li>
          <Link to="/admin/notices">공지사항 목록</Link>
        </li>
        <li>
          <Link to="/admin/notices/new">공지사항 작성</Link>
        </li>
        <li>
          <Link to="/admin/customers">고객 관리</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  </div>
);

export default AdminSidebar;
// src/AdminPage.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import NoticeList from './NoticeList';
import CreateNotice from './NoticeWrite'; // Renamed for consistency
import './AdminLayout.css'; // We'll create this for basic styling

// A placeholder for Customer Management
const CustomerManagement = () => <h2>고객 관리 페이지</h2>;

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-content">
        <Outlet /> {/* Child routes will render here */}
      </main>
    </div>
  );
};

const AdminPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Default content for /admin, or redirect */}
          <Route index element={<NoticeList />} /> {/* Default to NoticeList */}
          <Route path="notices" element={<NoticeList />} />
          <Route path="notices/new" element={<CreateNotice />} />
          <Route path="customers" element={<CustomerManagement />} />
          {/* Add other admin routes here */}
        </Route>
        {/* You can have other non-admin routes outside this layout */}
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
};

export default AdminPage;
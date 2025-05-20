import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import UserTable from "../components/UserTable";

const UserManagement = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <AdminHeader />
    <div style={{ display: "flex", flex: 1 }}>
      <AdminSidebar />
      <div className="content-area">
        <div className="page-title">사용자 관리</div>
        <div className="page-subtitle">회원 관리</div>
        <UserTable />
      </div>
    </div>
  </div>
);

export default UserManagement;

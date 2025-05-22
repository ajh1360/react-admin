// --- START OF FILE App.jsx ---
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminHeader from './components/AdminHeader'; // 헤더 컴포넌트
import AdminNavbar from './components/AdminNavbar'; // 내비게이션 바 (사이드바) 컴포넌트
import UserInfo from './pages/UserInfo';           // 사용자 정보 페이지
import UserList from './pages/UserList';           // 사용자 목록 페이지
import NoticeList from './pages/NoticeList';       // 공지사항 목록 페이지
import CreateNotice from './pages/NoticeWrite';    // 공지사항 작성 페이지 (파일명은 NoticeWrite.jsx, 컴포넌트명은 CreateNotice)
import Login from './pages/Login';                 // 로그인 페이지
import './App.css';                               // App 전체 스타일

const App = () => {
  // 사용자의 인증 상태를 관리하는 state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 초기값은 false (로그아웃 상태)

  // 로그인 처리 함수
  const handleLogin = (username, password) => {
    // 실제 애플리케이션에서는 서버와 통신하여 인증을 처리합니다.
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true); // 인증 성공
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
      setIsAuthenticated(false); // 인증 실패
    }
  };

  // 로그아웃 처리 함수 (추가 제안)
  const handleLogout = () => {
    setIsAuthenticated(false);
    // 필요하다면 추가적인 정리 작업 (예: localStorage 토큰 제거)
  };

  // 사용자가 인증되지 않은 경우 로그인 페이지를 렌더링
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // 사용자가 인증된 경우 메인 애플리케이션 레이아웃을 렌더링
  return (
    <div className="app-container">
      {/* AdminHeader에 로그아웃 기능을 전달할 수 있습니다. */}
      <AdminHeader onLogout={handleLogout} /> 
      <div className="main-layout">
        <AdminNavbar /> {/* AdminNavbar 내부에 Link 컴포넌트들을 사용한 메뉴가 있어야 합니다. */}
        <div className="page-content">
          <Routes>
            {/* 기본 경로 접속 시 /userinfo로 자동 이동 */}
            <Route path="/" element={<Navigate replace to="/userinfo" />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/noticelist" element={<NoticeList />} />
            <Route path="/createnotice" element={<CreateNotice />} />
            {/* 추가적인 라우트 정의 */}
            <Route path="*" element={<Navigate replace to="/userinfo" />} /> {/* 일치하는 라우트가 없을 경우 /userinfo로 이동 */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

// App 컴포넌트를 사용하기 위해 Router로 감싸줍니다.
// index.js 또는 App.js를 호출하는 최상위 파일에서 BrowserRouter를 사용하는 것이 일반적입니다.
// 여기서는 App 컴포넌트가 최상위 라우팅 로직을 이미 포함하고 있으므로,
// index.js에서는 <App />만 렌더링하면 됩니다.

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

// export default App; 
// 만약 index.js에서 <BrowserRouter>로 감싸고 있다면 위와 같이 App을 export 합니다.
// 여기서는 App 컴포넌트 내에서 Router를 사용하지 않고, RootApp을 만들어 Router로 감싸는 예시를 보여드립니다.
// 프로젝트 구조에 따라 index.js에서 <BrowserRouter><App /></BrowserRouter> 형태로 사용하거나,
// App.js 자체에서 <BrowserRouter>를 포함하도록 할 수 있습니다.
// 제공해주신 코드는 App 컴포넌트 내부에서 Routes를 사용하므로,
// 최상단(일반적으로 index.js)에서 BrowserRouter로 App을 감싸야 합니다.

// 따라서, 원래 제공해주신 코드대로 App을 export 하고,
// index.js (또는 main.jsx)에서 BrowserRouter로 감싸는 것이 좋습니다.
export default App; 
// --- END OF FILE App.jsx ---
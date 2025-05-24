// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState(''); // API DTO에 따라 'id' 또는 'email'
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // API 호출 로직 (이전과 동일)
    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // API 요청 DTO에 'id' 필드가 있다면 { id: email, password } 형태로 보내야 할 수 있습니다.
        // 여기서는 Spring 컨트롤러가 email 필드를 받는다고 가정합니다.
        body: JSON.stringify({ email: email, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.token) {
          localStorage.setItem('adminToken', data.token);
          setIsLoggedIn(true);
          navigate('/');
        } else {
          setError('토큰을 받지 못했습니다.');
        }
      } else {
        const errorMessage = data.message || `로그인에 실패했습니다. (상태: ${response.status})`;
        setError(errorMessage);
      }
    } catch (err) {
      setError('로그인 요청 중 오류가 발생했습니다. 서버 상태를 확인해주세요.');
    }
  };

  return (
    <div className="login-page-minimal">
      <div className="login-container-minimal">
        <h1 className="login-title-minimal">관리자 로그인 페이지</h1>

        {error && <p className="login-error-message-minimal">{error}</p>}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}> {/* form이 너비를 100% 차지하도록 */}
          <div className="input-group-minimal">
            <label htmlFor="email">아이디</label> {/* 이미지에서는 '아이디' */}
            <input
              type="text" // 이미지에서는 이메일 형식이 아니므로 text로 변경 (API에 따라 email도 가능)
              id="email" // id는 label의 htmlFor와 일치
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field-minimal"
              required
              autoComplete="username"
            />
          </div>

          <div className="input-group-minimal">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field-minimal"
              required
              autoComplete="current-password"
            />
          </div>

          <div style={{ textAlign: 'center' }}> {/* 버튼 중앙 정렬을 위한 div */}
            <button type="submit" className="login-button-minimal">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
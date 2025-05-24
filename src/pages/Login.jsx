// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState(''); // 'id' 대신 'email' 사용
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // 오류 메시지 상태
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // 이전 오류 메시지 초기화

    try {
      const response = await fetch('/api/admin/auth/login', { // 프록시 설정 사용 시 상대 경로
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // DTO 필드명에 맞춰서
      });

      const data = await response.json(); // 응답 본문을 JSON으로 파싱

      if (response.ok) { // HTTP 상태 코드가 200-299 사이인 경우
        // 로그인 성공
        console.log('Login successful:', data);
        if (data.token) {
          localStorage.setItem('adminToken', data.token); // 토큰을 localStorage에 저장
          setIsLoggedIn(true);
          navigate('/'); // 대시보드 또는 기본 페이지로 이동
        } else {
          setError('토큰을 받지 못했습니다.');
        }
      } else {
        // 로그인 실패 (서버에서 오류 응답)
        // 서버 응답에 따라 오류 메시지 처리 (data.message 등이 있을 수 있음)
        const errorMessage = data.message || `로그인에 실패했습니다. (상태: ${response.status})`;
        setError(errorMessage);
        console.error('Login failed:', data);
      }
    } catch (err) {
      // 네트워크 오류 또는 기타 예외 처리
      setError('로그인 요청 중 오류가 발생했습니다. 서버 상태를 확인해주세요.');
      console.error('Login request error:', err);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">관리자 로그인 페이지</h1>
        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>} {/* 오류 메시지 표시 */}
        <div>
          {/* 'id'에서 'email'로 변경 */}
          <label htmlFor="email">이메일 (아이디)</label>
          <input
            type="email" // type을 email로 변경하면 기본적인 이메일 형식 검사 가능
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username" // 자동 완성 기능 향상
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password" // 자동 완성 기능 향상
          />
        </div>
        <button type="submit" className="login-button">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
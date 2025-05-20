import React from "react";
import "./UserInfo.css";

const UserInfo = () => (
  <div className="user-info-page">
    <h2>사용자 정보</h2>
    <form>
      <div className="form-group">
        <label>이름</label>
        <input type="text" placeholder="사용자 이름" />
      </div>
      <div className="form-group">
        <label>권한</label>
        <select>
          <option>일반 사용자</option>
          <option>관리자</option>
        </select>
      </div>
      <div className="form-group checkbox">
        <label>
          <input type="checkbox" /> 알림 설정
        </label>
      </div>
      <button type="submit">저장</button>
    </form>
  </div>
);

export default UserInfo;

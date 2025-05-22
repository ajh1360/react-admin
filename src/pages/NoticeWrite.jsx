// src/NoticeWrite.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateNotice = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a server/state management
    alert(`공지사항 등록됨: ${title}`);
    setTitle('');
    navigate('/admin/notices'); // Navigate to the notice list page
  };

  return (
    <div>
      <h2>공지사항 작성</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목 입력"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default CreateNotice;
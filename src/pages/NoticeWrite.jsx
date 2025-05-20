import React, { useState } from 'react';

const CreateNotice = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`공지사항 등록됨: ${title}`);
    setTitle('');
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

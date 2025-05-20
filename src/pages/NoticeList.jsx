import React from 'react';

const notices = [
  { id: 1, title: '공지사항1', date: '2024-05-01' },
  { id: 2, title: '공지사항2', date: '2024-05-02' },
];

const NoticeList = () => (
  <div>
    <h2>공지사항 목록</h2>
    <ul>
      {notices.map(notice => (
        <li key={notice.id}>{notice.title} - {notice.date}</li>
      ))}
    </ul>
  </div>
);

export default NoticeList;

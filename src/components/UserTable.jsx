
const users = [...Array(10)].map((_, i) => ({
  id: i + 1,
  account: `TestUser${i + 1}`,
  status: i % 3 === 0 ? "REGISTERED" : "UNREGISTERED",
  email: `TestUser${i + 1}@gmail.com`,
  phone: `010-1111-000${i + 1}`,
  joined: `2019-05-0${i + 1}T04:11:02`,
  left: `2019-05-0${i + 1}T02:05:05`,
}));

const UserTable = () => (
  <div className="table-container">
    <p>결과</p>
    <table className="user-table">
      <thead>
        <tr>
          <th>id</th>
          <th>계정</th>
          <th>상태</th>
          <th>e-mail</th>
          <th>전화번호</th>
          <th>가입일</th>
          <th>해지일</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.account}</td>
            <td className={u.status === 'REGISTERED' ? 'status-registered' : 'status-unregistered'}>
              {u.status}
            </td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
            <td>{u.joined}</td>
            <td>{u.left}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="pagination">
      <button>이전</button>
      {[1, 2, 3, 4, 5, 6, 7].map(p => (
        <button key={p} className={p === 1 ? "active" : ""}>{p}</button>
      ))}
      <button>다음</button>
    </div>
    <p>Showing 1 to 10 of 10 entries</p>
  </div>
);

export default UserTable;

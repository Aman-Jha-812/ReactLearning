import userData from './assets/components/data.json';

function App() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import UserList from "./components/userList/userList";
import NewUserForm from "./components/newuser/NewUserForm";
function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // FUnctions

  const deleterFn = (id) => {
    setUsers((events) => {
      return events.filter((items) => {
        return items.id !== id;
      });
    });
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);

    if (e.key === "Escape") setShowModal(false);
  };

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleterFn={deleterFn} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <button className="create-user" onClick={() => setShowModal(true)}>
        Create user
      </button>
      <Footer />
    </div>
  );
}

export default App;

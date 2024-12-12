// style

import "./UserList.css";

function UserList({ users, deleterFn }) {
  return (
    <div className="userList">
      <div className="container userList-container">
        {users.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-inner">
                <img
                  src={item.image}
                  alt={item.name}
                  height={150}
                  width={150}
                />
                <h3>
                  {item.firstName} {item.lastName} ,{item.age} age
                </h3>
                <p>From : {item.from}</p>
                <p>Job : {item.job}</p>
                <p>Gender : {item.gender}</p>
                <button onClick={() => deleterFn(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;

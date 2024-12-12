import "./NewUserForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewUserForm({ addUser }) {
  const [user, setUser] = useState({
    id: uuidv4(),
    image: "",
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    job: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="modal-vrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create user</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image Url :</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, image: e.target.value };
                  });
                }}
                type="url"
                required
              />
            </label>
            <label>
              <span>First name :</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
                type="text"
                required
              />
            </label>
            <label>
              <span>Last name :</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
                type="text"
                required
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, age: e.target.value };
                  });
                }}
                type="number"
                required
              />
            </label>
            <label>
              <span>Location :</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, from: e.target.value };
                  });
                }}
                type="text"
                required
              />
            </label>
            <label>
              <span>Job :</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, job: e.target.value };
                  });
                }}
                type="text"
                required
              />
            </label>
            <div className="gender">
              <span>Gender :</span>
              <label>
                <small>Male</small>
                <input
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                  type="radio"
                  required
                  name="gender"
                  value="male"
                />
                <small>Female</small>
                <input
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                  type="radio"
                  required
                  name="gender"
                  value="female"
                />
              </label>
            </div>
            <button type="submit" className="modal-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;

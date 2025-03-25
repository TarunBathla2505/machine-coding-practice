import React from "react";

function Profile({ data, setData }) {
  const { name, email, age } = data;

  const handleDataChange = (e, item) => {
    setData((prev) => ({ ...prev, [item]: e.target.value }));
  };

  return (
    <div className="form-tabs">
      <div>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => handleDataChange(e, "name")}
          value={name}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          onChange={(e) => handleDataChange(e, "age")}
          value={age}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          onChange={(e) => handleDataChange(e, "email")}
          value={email}
        />
      </div>
    </div>
  );
}

export default Profile;

import React, { useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  const getData = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log("Error from GET request: ", err.response));
  };

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleChangeNumber = e => {
    setNewFriend({ ...newFriend, [e.target.name]: parseInt(e.target.value) });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newFriend);
    axiosWithAuth()
      .post(`http://localhost:5000/api/friends`, newFriend)
      .then(res => console.log(res))
      .catch(err =>
        console.log("Error in POST Friend: ", err.response.data.error)
      );
  };

  return (
    <div>
      <h4>Here are some of your friends</h4>
      <button onClick={() => getData()}>Get some Friends</button>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={newFriend.id}
            name="id"
            placeholder="ID"
            onChange={handleChangeNumber}
          />
          <input
            type="text"
            value={newFriend.name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="number"
            value={newFriend.age}
            name="age"
            placeholder="Age"
            onChange={handleChangeNumber}
          />
          <input
            type="text"
            value={newFriend.email}
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <button>Add New Friend</button>
        </form>
      </div>

      {friends &&
        friends.map(friend => {
          return (
            <div key={friend.id}>
              <p>Name: {friend.name}</p>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
              <p>Id: {friend.id}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Friends;

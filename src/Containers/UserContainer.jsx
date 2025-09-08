import React, { useEffect, useState } from "react";
import UserList from "../Components/UserList";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("https://reqres.in/api/users", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      const json = await response.json();
      console.log(json);
      if (!json.data) return;
      setUsers(json.data);
      setIsLoading(false)
    } catch (error) {
        setError(error)
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  },[]);
  return <div> <UserList users={users} loading={isLoading} error={error} /> </div>;
};

export default UserContainer;

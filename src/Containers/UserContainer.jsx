import React, { useEffect, useState } from "react";
import UserList from "../Components/UserList";
import useFetch from "../Hooks/useFetch";

const UserContainer = () => {
 const {users, isLoading, error} = useFetch()
  return <div> <UserList users={users} loading={isLoading} error={error} /> </div>;
};

export default UserContainer;

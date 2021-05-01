import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";

const Account = () => {
  const { loading, error, data } = useQuery(USER_DATA);
  if (loading) return <h1>Loding...</h1>;
  if (error) return <h1>Error..{console.log(error)}.</h1>;
  return (
    <div>
      {console.log("UserData", data)}
      <h1>My accounts</h1>
      <h1>Username= {data?.user?.username}</h1>
      <h1>Email= {data?.user?.email}</h1>
      <h3>
        <a href="/logout/">Logout</a>
      </h3>
    </div>
  );
};
const USER_DATA = gql`
  {
    user {
      id
      username
      email
    }
  }
`;
export default Account;

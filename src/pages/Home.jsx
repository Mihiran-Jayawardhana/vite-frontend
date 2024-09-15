import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

import { UserTable } from "../components/home/UserTable";
import { UserCard } from "../components/home/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setshowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/user/get-all")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error(error); // Log the error or show an error message
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-mx-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-5 py-2 rounded-xl mr-2"
          onClick={() => {
            setshowType("table");
          }}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-5 py-2 rounded-xl ml-2"
          onClick={() => {
            setshowType("card");
          }}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Users list</h1>
        <Link to={"/user/save"}>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <UserTable users={users} />
      ) : (
        <UserCard users={users} />
      )}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteUser = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3001/user/delete/${id}`)
      .then(() => {
        console.log("user deleted");
        setLoading(false);
        navigate("/");
      })
      .then((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-2xl my-4 text-red-500">Delete User</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 rounded-xl w-[600px] p-6 mx-auto">
        <h3 className="text-2xl">Are you sure want to delete this user???</h3>
        <button
          className="m-6 w-[250px] bg-red-400 p-2 text-white"
          onClick={handleDeleteUser}
        >
          Yes, delete.
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;

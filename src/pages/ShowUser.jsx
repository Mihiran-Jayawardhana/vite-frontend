import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowUser = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/user/get-by-id/${id}`)
      .then((response) => {
        // console.log(response.data);
        setUsers(response.data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-3xl">Show User</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-green-300 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">ID :</span>
            <span className="text-blue-600">{user._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">First Name :</span>
            <span className="text-blue-600">{user.first_name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Last Name :</span>
            <span className="text-blue-600">{user.last_name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Email :</span>
            <span className="text-blue-600">{user.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Create Time :</span>
            <span className="text-blue-600">
              {new Date(user.createdAt).toString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">
              Lat Update Time:{" "}
            </span>
            <span className="text-blue-600">
              {new Date(user.updatedAt).toString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowUser;

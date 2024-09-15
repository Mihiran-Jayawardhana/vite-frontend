import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const EditUser = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/get-by-id/${id}`)
      .then((response) => {
        setFirstName(response.data.user.first_name);
        setlastName(response.data.user.last_name);
        setEmail(response.data.user.email);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleEditUser = () => {
    const data = {
      first_name,
      last_name,
      email,
    };
    setLoading(true);

    axios
      .put(`http://localhost:3001/user/update/${id}`, data)
      .then(() => {
        setLoading(false);
        // console.log("user update success");
        enqueueSnackbar("User created successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("Error in saving user,check console for more info");
        enqueueSnackbar("user update error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="mt-4">
      <BackButton />
      <h1 className="my-4 text-3xl">Edit User</h1>

      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded w-[600px] mx-auto">
        <div className="m-4">
          <label className="text-xl mr-4 text-grey">First Name</label>
          <input
            type="text"
            className="border-2 border-purple-300 mt-1 px-4 py-2 w-full rounded"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="m-4">
          <label className="text-xl mr-4 text-grey">Last Name</label>
          <input
            type="text"
            className="border-2 border-purple-300 mt-1 px-4 py-2 w-full rounded"
            value={last_name}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="m-4">
          <label className="text-xl mr-4 text-grey">Email</label>
          <input
            type="email"
            className="border-2 border-purple-300 mt-1 px-4 py-2 w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="m-4 p-2 bg-green-400 text-white rounded"
          onClick={handleEditUser}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditUser;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const CreateUser = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleSaveUser = () => {
    const data = {
      first_name,
      last_name,
      email,
    };
    setLoading(true);

    axios
      .post("http://localhost:3001/user/save", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("User created success!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error!", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="mt-4">
      <BackButton />
      <h1 className="my-4 text-3xl">Create User</h1>

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
          onClick={handleSaveUser}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateUser;

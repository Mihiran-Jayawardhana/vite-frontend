import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import DeleteUser from "./pages/DeleteUser";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";
import ShowUser from "./pages/ShowUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/save" element={<CreateUser />} />
      <Route path="/user/get-by-id/:id" element={<ShowUser />} />
      <Route path="/user/update/:id" element={<EditUser />} />
      <Route path="/user/delete/:id" element={<DeleteUser />} />
    </Routes>
  );
};

export default App;

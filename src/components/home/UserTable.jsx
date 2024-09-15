import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

export const UserTable = ({ users }) => {
  return (
    <div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-800 rounded-md">No</th>
            <th className="border border-slate-800 rounded-md">First Name</th>
            <th className="border border-slate-800 rounded-md">Last Name</th>
            <th className="border border-slate-800 rounded-md max-md:hidden">
              Email
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {user.first_name}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {user.last_name}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {user.email}
                </td>

                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/user/get-by-id/${user._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/user/update/${user._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/user/delete/${user._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-800" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

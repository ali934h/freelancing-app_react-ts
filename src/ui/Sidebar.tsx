import React from "react";
import { GoHome, GoTasklist } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { NavLink } from "react-router-dom";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="border-base-content row-span-2 border-r p-2">
      <ul className="menu menu-vertical text-primary-content gap-1">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-primary" : "text-base-content"
            }
            to="/owner/dashboard"
          >
            <GoHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-primary" : "text-base-content"
            }
            to="/owner/projects"
          >
            <LuListTodo />
            <span>Projects</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

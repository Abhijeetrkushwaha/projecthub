import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/projecthub/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/projecthub/signin">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignOutLinks;

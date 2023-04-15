import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">authMaster</a>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to={"/orders"} className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>
        <Link to={"/login"} className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
        <Link to={"/register"} className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        {user && (
          <>
            <Link to={"/profile"} className="btn btn-ghost normal-case text-xl">
              Profile
            </Link>
          </>
        )}
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-accent">
              Signout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-accent">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import icon from "../images/icon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-4">
          {/* <h3>{user.displayName}</h3> */}
          <img className="w-14 h-14 p-2" src={icon} alt="usericon" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white border-solid border-2 p-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

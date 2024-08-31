import React, { useEffect } from "react";
import icon from "../images/icon.jpg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      //unsubscibe when component unmount
      return () => unsubscibe();
    });
  }, []);

  return (
    <div className="absolute w-full px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="logo" />
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

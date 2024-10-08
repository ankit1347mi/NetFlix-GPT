import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = isSignInForm ? null : name.current.value;

    const message = checkValidData(emailValue, passwordValue, nameValue);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
          navigate("/");
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
          navigate("/");
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="backgroundImg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-4/12 m-36 mx-auto right-0 left-0 text-white bg-black opacity-0.1 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-500 p-2 font-bold text-lg">{errorMessage}</p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />

        <button
          className="p-4 my-4 bg-red-500 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 no-underline" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <span>
              New to Netflix? <b className="cursor-pointer">Sign Up Now</b>
            </span>
          ) : (
            <span>
              If already registered then
              <b className="cursor-pointer"> Sign In</b>
            </span>
          )}
        </p>

        <p className="text-sm">
          {isSignInForm &&
            `This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.`}
        </p>
      </form>
    </div>
  );
};

export default Login;

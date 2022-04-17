import React from "react";
import auth from "../../../Firebase/Firebase.inite";


import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googlError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  if (googleLoading || fbLoading || githubLoading) {
    return <Loading></Loading>;
  }

  if (googleUser) {
    console.log(googleUser);
  }
  if (fbUser) {
    console.log(fbUser);
  }
  if (githubUser) {
    console.log(githubUser);
  }
  if (googleUser || fbUser || githubUser) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="opacity-25 bg-secondary w-50"
        ></div>
        <p className="mx-2 mt-2">or</p>
        <div
          style={{ height: "1px" }}
          className="opacity-25 bg-secondary w-50"
        ></div>
      </div>

      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-info text-white mt-1 w-100 rounded-pill"
      >
        <img src='https://i.ibb.co/rmRz9g1/1.png' className="mx-2 rounded-circle" alt="" />
        CONTINUE WITH GOOGLE
      </button>

      {googlError ? (
        <p className="text-danger text-center">Error: {googlError.message}</p>
      ) : (
        ""
      )}

      <button
        onClick={() => signInWithFacebook()}
        className="btn btn-primary mt-2 w-100 rounded-pill"
      >
        <img
          style={{ width: "30px" }}
          className="mx-2 rounded-circle"
          src='https://i.ibb.co/yhLpRSJ/fb-icon.png'
          alt=""
        />
        CONTINUE WITH FACEBOOK
      </button>

      {fbError ? (
        <p className="text-danger text-center">Error: {fbError.message}</p>
      ) : (
        ""
      )}

      <button
        onClick={() => signInWithGithub()}
        className="btn btn-dark mt-2 w-100 rounded-pill"
      >
        <img src="https://i.ibb.co/jZPkdNC/Git-Hub-Mark.png" className="mx-2 rounded-circle" alt="" />
        CONTINUE WITH GITHUB
      </button>

      {githubError ? (
        <p className="text-danger text-center">Error: {githubError.message}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SocialLogin;
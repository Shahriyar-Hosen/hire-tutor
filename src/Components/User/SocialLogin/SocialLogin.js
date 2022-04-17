import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init/Firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (googleLoading) {
   return <Loading />;
  }

  if (googleUser) {
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
        <img
          style={{ height: "30px" }}
          src="https://i.ibb.co/rmRz9g1/1.png"
          className="mx-2 rounded-circle"
          alt=""
        />
        CONTINUE WITH GOOGLE
      </button>

      {googleError ? (
        <p className="text-danger text-center">Error: {googleError.message}</p>
      ) : (
        ""
      )}

      <button
        onClick={() => "signInWithFacebook()"}
        className="btn btn-primary mt-2 w-100 rounded-pill"
      >
        <img
          style={{ height: "30px" }}
          className="mx-2 rounded-circle"
          src="https://i.ibb.co/yhLpRSJ/fb-icon.png"
          alt=""
        />
        CONTINUE WITH FACEBOOK
      </button>

      {/* {fbError ? (
        <p className="text-danger text-center">Error: {fbError.message}</p>
      ) : (
        ""
      )} */}

      <button
        onClick={() => "signInWithGithub()"}
        className="btn btn-dark mt-2 w-100 rounded-pill"
      >
        <img
          style={{ height: "30px" }}
          src="https://i.ibb.co/jZPkdNC/Git-Hub-Mark.png"
          className="mx-2 rounded-circle"
          alt=""
        />
        CONTINUE WITH GITHUB
      </button>

      {/* {githubError ? (
        <p className="text-danger text-center">Error: {githubError.message}</p>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default SocialLogin;

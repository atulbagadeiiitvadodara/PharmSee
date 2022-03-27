import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "./Context";

const Error = () => {
  const [context, setContext] = useContext(Context);
  const history = useHistory();

  if (context != "") {
    history.push("/");
    return null;
  }

  return (
    <div className="container text-center my-4 py-4">
      <p className="fw-bold">Email or Password is wrong.</p>
      <p className="fw-bold">Please try to login again!</p>
    </div>
  );
};

export default Error;

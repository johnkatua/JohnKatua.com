import React from "react";
import { useHistory } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  const history = useHistory();

  const redirectToHomepage = () => {
    return history.push("/home");
  };

  return (
    <div className="welcome--container">
      <button className="welcome--container__btn" onClick={redirectToHomepage}>
        Welcome 👋
      </button>
    </div>
  );
};

export default Welcome;

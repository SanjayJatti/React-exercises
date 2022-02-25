import React from "react";
import { useState } from "react";

export default function ShowPassword() {
  const [changeType, setChangeItem] = useState(false);

  const showPassword = () => {
    setChangeItem(!changeType);
  };

  return (
    <div className="container">
      <h2>Show Password</h2>
      <input
        placeholder="enter Password"
        type={changeType ? "text" : "password"}
      />

      <button onClick={showPassword}>
        {changeType ? "Hide Password" : "show Password"}
      </button>
    </div>
  );
}

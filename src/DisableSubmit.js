import React from "react";
import { useState } from "react";

export default function DisableSubmit() {
  const [disabled, setDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function submitHandler() {
    if (password === confirmPass) {
      return [setDisabled(false), console.log(password)];
    } else {
      return setDisabled(true);
    }
  }
  return (
    <div>
      <h2>Disable Submit</h2>
      <form>
        <div className="input-container">
          <label htmlFor="password">Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password-confirm">Confirm Password: </label>
          <input
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            name="password-confirm"
            id="password-confirm"
          />
        </div>
        <button disabled={disabled} onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

import React from "react";
import { useState } from "react";

export default function PasswordMatch() {
  const [msg, setMsg] = useState("");
  let passwordValue;
  let confirmValue;

  function inputPassword(e) {
    return (passwordValue = e.target.value);
  }
  function confirmPassword(e) {
    return (confirmValue = e.target.value);
  }
  function checkPassword() {
    return passwordValue === confirmValue
      ? setMsg("Password successfully matched")
      : setMsg("Oops! Password doesn't match");
  }

  return (
    <div>
      <h2>Password Match</h2>
      <form>
        <div className="input-container">
          <label HTMLfor="password">Password: </label>
          <input
            onChange={inputPassword}
            required
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="input-container">
          <label HTMLfor="password-confirm">Confirm Password: </label>
          <input
            onChange={confirmPassword}
            required
            type="password"
            name="password-confirm"
            id="password-confirm"
          />
        </div>
        <button onClick={checkPassword}>Reset Passoword</button>
      </form>
      <h3>{msg}</h3>
    </div>
  );
}

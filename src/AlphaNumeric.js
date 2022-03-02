import { useState } from "react";

export default function AlphaNumeric() {
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const checkPassword = () => {
    var strongPassword = new RegExp("^(?=.*[0-9])");
    strongPassword.test(password)
      ? seterror("Valid Password!")
      : seterror("password should contain number");
  };

  return (
    <div>
      <h2>Alphanumeric Password</h2>
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password Here"
        type="password"
      />
      <button onClick={() => checkPassword()}>Check</button>
      <h3>{error}</h3>
    </div>
  );
}

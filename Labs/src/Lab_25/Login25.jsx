import { useState, useContext } from "react";
import { UserContext } from "./A25";

function Login25() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { setCurrentUser } = useContext(UserContext);

  function checkLogin() {
    if (user === "asad" && pass === "123") {
      setCurrentUser(user);
    } else {
      alert("Invalid Login");
    }
  }

  return (
    <>
      <div className="container w-25 mt-5 text-center">
        <h3>Username:</h3>

        <input
          type="text"
          value={user}
          className="text-black form-control"
          onChange={(e) => setUser(e.target.value)}
        />

        <br />

        <h3>Password:</h3>

        <input
          type="password"
          value={pass}
          className="text-black form-control"
          onChange={(e) => setPass(e.target.value)}
        />

        <br />
        <br />

        <button onClick={checkLogin} className="text-black btn btn-info">
          Login
        </button>
      </div>
    </>
  );
}

export default Login25;

import { createContext, useState } from "react";
import Login from "./Login25";
import Home from "./H25";

export const UserContext = createContext();

function A25() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {currentUser === "" ? <Login /> : <Home />}
    </UserContext.Provider>
  );
}

export default A25;


import { useContext } from "react";
import { UserContext } from "./A25";

function H25() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <p className="text-center mt-5 display-1">Welcome {currentUser}</p>
    </>
  );
}

export default H25;

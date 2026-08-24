import { useState } from "react";
import C from "./C";

function B({ name, setName }) {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="container w-25 mt-5 text-center">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="container w-25 mt-3 text-center">
        <button
          className="btn btn-outline-primary"
          onClick={() => setName(input)}
        >
          SetName
        </button>
        <C  name={name} />
      </div>
    </>
  );
}

export default B;

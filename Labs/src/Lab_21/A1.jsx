
import { useState } from "react";

function A1() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center mt-5">
      <h1>Count is: {count}</h1>

      <button
        className="btn btn-primary me-2"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add 1
      </button>

      <button
        className="btn btn-danger me-2"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decr 1
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default A1;


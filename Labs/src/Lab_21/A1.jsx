import { useState } from "react";

function A1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count is: {count}</h1>
      <button className="btn btn-primary" onClick={() => setCount((prev) => prev + 1)}>
        Add 1
      </button>
      <button className="btn btn-primary ms-5" onClick={() => setCount((prev) => prev - 1)}>
        Decr 1
      </button>
      <button className="btn btn-primary ms-5" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}

export default A1;
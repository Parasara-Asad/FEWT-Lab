import { useEffect, useState } from "react";

function A2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count is: " + count);
  }, [count]); 

  return (
    <div className="container p-3">
      <h1>Count: {count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCount((count) => count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default A2;
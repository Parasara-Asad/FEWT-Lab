import { useState } from "react";

function A1() {
  const [display, setDisplay] = useState("");

  const press = (val) => {
    setDisplay(display + val);
  };

  const clear = () => {
    setDisplay("");
  };

  const equal = () => {
    try {
      setDisplay(String(Function("return " + display)()));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div
      className="container text-center mt-4 border border-2 border-dark"
      style={{ width: "350px"}}
    >
      <input
        type="text"
        className="form-control mb-3 text-end mt-3"
        value={display}
        readOnly
      />
      <div className="d-flex justify-content-between mb-2 mt-3">
        <button className="btn btn-primary" onClick={() => press("1")}>
          1
        </button>
        <button className="btn btn-primary" onClick={() => press("2")}>
          2
        </button>
        <button className="btn btn-primary" onClick={() => press("3")}>
          3
        </button>
        <button className="btn btn-primary" onClick={() => press("+")}>
          +
        </button>
      </div>
      <div className="d-flex justify-content-between mb-2 mt-4">
        <button className="btn btn-primary" onClick={() => press("4")}>
          4
        </button>
        <button className="btn btn-primary" onClick={() => press("5")}>
          5
        </button>
        <button className="btn btn-primary" onClick={() => press("6")}>
          6
        </button>
        <button className="btn btn-primary" onClick={() => press("-")}>
          -
        </button>
      </div>
      <div className="d-flex justify-content-between mb-2 mt-4">
        <button className="btn btn-primary" onClick={() => press("7")}>
          7
        </button>
        <button className="btn btn-primary" onClick={() => press("8")}>
          8
        </button>
        <button className="btn btn-primary" onClick={() => press("9")}>
          9
        </button>
        <button className="btn btn-primary" onClick={() => press("*")}>
          *
        </button>
      </div>
      <div className="d-flex justify-content-between mb-2 mt-4">
        <button className="btn btn-primary" onClick={clear}>
          C
        </button>
        <button className="btn btn-primary" onClick={() => press("0")}>
          0
        </button>
        <button className="btn btn-primary" onClick={equal}>
          =
        </button>
        <button className="btn btn-primary" onClick={() => press("/")}>
          /
        </button>
      </div>
    </div>
  );
}

export default A1;
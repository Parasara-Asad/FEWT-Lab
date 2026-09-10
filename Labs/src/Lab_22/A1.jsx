import { useState } from "react";

function A1() {
  const [display, setDisplay] = useState("");

  const operators = ["+", "-", "*", "/"];

  const press = (val) => {
    // If previous result is Error
    if (display === "Error" || display === "undefined") {
      if (operators.includes(val) && val !== "-") {
        return;
      }

      setDisplay(val);
      return;
    }

    const lastChar = display.slice(-1);

    // Operator button
    if (operators.includes(val)) {
      // Don't allow +, *, / as first character
      if (display === "") {
        if (val === "-") {
          setDisplay("-");
        }
        return;
      }

      // Replace previous operator
      if (operators.includes(lastChar)) {
        setDisplay(display.slice(0, -1) + val);
        return;
      }
    }

    // Add number/operator
    setDisplay(display + val);
  };

  const clear = () => {
    setDisplay("");
  };

  const equal = () => {
    if (
      display === "" ||
      display === "Error" ||
      display === "undefined"
    ) {
      return;
    }

    try {
      const result = Function("return " + display)();

      if (result === undefined || Number.isNaN(result)) {
        setDisplay("Error");
      } else {
        setDisplay(String(result));
      }
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div
      className="container text-center mt-4 border border-2 border-dark p-3"
      style={{ width: "350px" }}
    >
      {/* Display */}
      <input
        type="text"
        className="form-control mb-3 text-end"
        value={display}
        readOnly
      />

      {/* Row 1 */}
      <div className="d-flex justify-content-between mb-2">
        <button
          className="btn btn-primary"
          onClick={() => press("1")}
        >
          1
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("2")}
        >
          2
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("3")}
        >
          3
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("+")}
        >
          +
        </button>
      </div>

      {/* Row 2 */}
      <div className="d-flex justify-content-between mb-2">
        <button
          className="btn btn-primary"
          onClick={() => press("4")}
        >
          4
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("5")}
        >
          5
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("6")}
        >
          6
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("-")}
        >
          -
        </button>
      </div>

      {/* Row 3 */}
      <div className="d-flex justify-content-between mb-2">
        <button
          className="btn btn-primary"
          onClick={() => press("7")}
        >
          7
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("8")}
        >
          8
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("9")}
        >
          9
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("*")}
        >
          *
        </button>
      </div>

      {/* Row 4 */}
      <div className="d-flex justify-content-between mb-2">
        <button
          className="btn btn-primary"
          onClick={clear}
        >
          C
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("0")}
        >
          0
        </button>

        <button
          className="btn btn-primary"
          onClick={equal}
        >
          =
        </button>

        <button
          className="btn btn-primary"
          onClick={() => press("/")}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default A1;
import { useState } from "react";

function A23() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [eidt, setEidt] = useState(-1);

  function saveData() {
    if (name == "" || price == "") {
      alert("Please enter name and price");
      return;
    }

    const temp = [...products];

    if (eidt == -1) {
      temp.push({ name: name, price: price });
    } else {
      temp[eidt] = { name: name, price: price };
      setEidt(-1);
    }

    setProducts(temp);

    setName("");
    setPrice("");
  }

  function eidtData(index) {
    setName(products[index].name);
    setPrice(products[index].price);
    setEidt(index);
  }

  function deleteData(index) {
    const temp = [...products];

    temp.splice(index, 1);

    setProducts(temp);
  }

  return (
    <>
    <p className="h3 text-center mt-3 mb-5">products stored</p>
      <div className="container w-25 mt-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className="container d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary w-25"
            onClick={saveData}
          >
            {eidt == -1 ? "Add" : "Update"}
          </button>
        </div>
      </div>

      <div className="container w-50">
        <table className="table table-success table-striped text-center mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>

                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => eidtData(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteData(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default A23;

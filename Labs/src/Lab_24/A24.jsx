import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function A24() {
  const apiurl = "https://6aad3322a2413bf0ec117b44.mockapi.io/Student";
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    Age: "",
    avatar: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId === null) {
      fetch(apiurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((newStudent) => {
          setData([...data, newStudent]);
          setForm({
            name: "",
            Age: "",
            avatar: "",
          });
        });
    } else {
      fetch(`${apiurl}/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((updatedStudent) => {
          setData(
            data.map((item) => (item.id === editId ? updatedStudent : item)),
          );
          setEditId(null);
          setForm({
            name: "",
            Age: "",
            avatar: "",
          });
        });
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setForm({
      name: item.name,
      Age: item.Age,
      avatar: item.avatar,
    });
  };

  const handleDelete = (id) => {
    fetch(`${apiurl}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      });
  };

  const handleCancel = () => {
    setEditId(null);
    setForm({
      name: "",
      Age: "",
      avatar: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="container w-50">
        <div className="card p-4 mb-5 w-100">
          <h3 className="text-center mb-4">
            {editId === null ? "Add Student" : "Update Student"}
          </h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="form-control mb-3"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="Age"
              placeholder="Enter Age"
              className="form-control mb-3"
              value={form.Age}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="avatar"
              placeholder="Enter Image URL"
              className="form-control mb-3"
              value={form.avatar}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-success me-2">
              {editId === null ? "Add Student" : "Update Student"}
            </button>

            {editId !== null && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="row">
        {data.map((item) => (
          <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
            <div className="card h-100 shadow">
              <img
                src={item.avatar}
                className="card-img-top"
                alt={item.name}
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Age: {item.Age}</p>

                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info ms-3"
                  onClick={() => {
                    navigate("/Lab24/studentDetails/" + item.id);
                  }}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default A24;

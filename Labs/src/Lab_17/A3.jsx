
function A3() {
  let obj = [
    {
      id: 1,
      name: "Asad",
      couers: "CSE",
    },
    {
      id: 2,
      name: "Nazim",
      couers: "IT",
    },
    {
      id: 3,
      name: "Nakib",
      couers: "ME",
    },
  ];

  return (
    <div className="container w-50 mt-5">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {obj.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.couers}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default A3;

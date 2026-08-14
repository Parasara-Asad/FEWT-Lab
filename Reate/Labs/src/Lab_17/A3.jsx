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
    <>
      <div className="container w-50">
        <table className="table table-striped">
          <thead>
            {obj.map((obj) => {
              return (
                <tr>
                  <td>{obj.id}</td>
                  <td>{obj.name}</td>
                  <td>{obj.couers}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </>
  );
}

export default A3;

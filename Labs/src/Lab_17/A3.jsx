function A3() {
  const obj = [
    { id: 1, name: "Asad", course: "CSE" },
    { id: 2, name: "Nazim", course: "IT" },
    { id: 3, name: "Nakib", course: "ME" },
  ];

  return (
    <div className="container w-50">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {obj.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default A3;

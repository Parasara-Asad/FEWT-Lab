function A2() {
  const facultiesName = ["Arjun bala", "Dharmik", "Vishal"];

  return (
    <ul>
      {facultiesName.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default A2;

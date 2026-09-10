function A1() {
  const names = ["Asad", "nazim", "sadik", "nakib"];

  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default A1;

function A1() {
  let names = ["Asad", "nazim", "sadik", "nakib"];
  return (
    <>
      {names.map((name) => {
        return (
          <ul>
            <li>{name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default A1;

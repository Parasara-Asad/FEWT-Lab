
function A1() {
  let names = ["Asad", "nazim", "sadik", "nakib"];

  return (
    <>
      {names.map((name, index) => {
        return (
          <ul key={index}>
            <li>{name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default A1;


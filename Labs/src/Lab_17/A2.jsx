
function A2() {
  let Facultiesname = ["Arjun bala", "Dharmik", "Vishal"];

  return (
    <>
      {Facultiesname.map((name, index) => {
        return (
          <ul key={index}>
            <li>{name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default A2;


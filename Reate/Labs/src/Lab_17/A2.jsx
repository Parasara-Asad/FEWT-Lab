function A2() {
  let Facultiesname = ["Arjun bala", "Dharmik", "Vishal"];
  return (
    <>
      {Facultiesname.map((name) => {
        return (
          <ul>
            <li>{name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default A2;

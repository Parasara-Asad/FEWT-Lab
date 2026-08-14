function IsDisplay() {
  let isDisplay = false;
  return (
    <>
      {isDisplay ? (
        <h1 className="text-center mt-3">Hello world</h1>
      ) : (
        <h1 className="text-center mt-3">Not hello world</h1>
      )}
      ;
    </>
  );
}

export default IsDisplay;

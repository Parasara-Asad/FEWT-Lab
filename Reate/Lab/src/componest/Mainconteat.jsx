import Card from "./Card";

function Mainconteat() {
  return (
    <>
      <div className="container mt-5 p-3">
        <div className="row">
          <div className="col">
           <Card 
           img='https://i0.wp.com/1.bp.blogspot.com/-Y-S6X_rrSUA/UXHt1P0TMaI/AAAAAAAACl4/QFyJbiWX1lk/s1600/oblivion-movie-poster.jpg'
           name='oblivion'
           />
          </div>
          <div className="col">
            <Card 
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCBA99kT3nhgdSuPOwOgrqpGfsigC8xxZIKqnIpaHMA&s=10' 
            name='black panther'
            />
          </div>
          <div className="col">
          <Card
           img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2ROP3XNRJMuQK4RS9utHTSFnQqPc_KISeI-YEnFTfw&s=10'
           name='Dune part 1'
           />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainconteat;

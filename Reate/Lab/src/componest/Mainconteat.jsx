import "./Style/Card.css"

function Mainconteat() {
  return (
    <>
      <div className="container mt-5 p-3">
        <div className="row">
          <div className="col">
            <div class="card ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2MrFunrB993Y_kPcs6zsiSj4EY7d69x8652_HNCdXw&s=10"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">OBLIVION</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCBA99kT3nhgdSuPOwOgrqpGfsigC8xxZIKqnIpaHMA&s=10"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Balck panter</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2ROP3XNRJMuQK4RS9utHTSFnQqPc_KISeI-YEnFTfw&s=10"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Dune part-1</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainconteat;

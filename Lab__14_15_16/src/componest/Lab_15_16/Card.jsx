import "./Style/Card.css";

function Card(props) {
  return (
    <>
      <div class="card">
        <img
          src={props.img}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-center">{props.name}</h5>
        </div>
        <button className="btn btn-primary" onClick={()=>{
            alert("Button clcik");
        }} >Wacth movie</button>
      </div>
    </>
  );
}

export default Card;

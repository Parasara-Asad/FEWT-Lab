
function A4() {
  const items = [
    {
      id: 1,
      name: "Leptop HP",
      price: 12000,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXAAm9EV94akEed9Im6HkP1b65WtkXHb7yQLuA8Q98_9HV9w-HTQ-f43rZYQeYpb7ExePHqMaL1c_9pTYF2gwJts44rWPRa-YCf7_bGvc5FY-NOfRJMJD4u7D2reJtjXwp0PWgsLURogg&usqp=CAc",
    },
    {
      id: 2,
      name: "I phone 17",
      price: 32000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYu0jGSc5fq63_ZjchHH9MOphbDTc-f0VeTw9Q4xKYQ&s=10",
    },
    {
      id: 3,
      name: "Mouse",
      price: 500,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlPn7_84TMx1fT3E0JJxyDiOtSDF_vGOuyyYVJQJzFw&s=10",
    },
  ];

  return (
    <div className="container text-center my-4">
      <div className="row g-4 justify-content-center">
        {items.map((item) => (
          <div className="col-12 col-sm-6 col-md-4" key={item.id}>
            <div className="card h-100 text-center shadow-sm">
              <img
                src={item.img}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text fw-bold text-success">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>
                <button className="btn btn-primary mt-3" onClick={()=>{
                    alert("Coming soon")
                }}>Go Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default A4;

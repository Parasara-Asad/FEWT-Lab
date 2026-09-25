import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const apiurl = "https://6aad3322a2413bf0ec117b44.mockapi.io/Student/" + id;
  const [data, setData] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [apiurl]);

  if (!data) {
    return <div className="text-center mt-5">Loading student details...</div>;
  }

  return (
    <div className="container w-50 p-3 mt-5">
      <div className="row border border-1 border-drak p-3">
        <div className="col-3">
          <img src={data.avatar} alt="not found" className="img-fluid" />
        </div>
        <div className="col">
          <p className="h2">Name: {data.name}</p>
          <p>firstName: {data.firstName}</p>
          <p>lastName: {data.lastName}</p>
          <p>createdAt: {data.createdAt}</p>
          <p>Age: {data.Age}</p>
          <p>rollNumber: {data.rollNumber}</p>
          <p>country: {data.country}</p>
          <button
            className="btn btn-info mt-2 ms-3"
            onClick={() => {
              navigation("/Lab24/A24");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;

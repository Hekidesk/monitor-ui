import React, { useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Card, CardBody } from "reactstrap";

function UserInfo() {
  const [info] = useState({
    name: "test test",
    image:
      "https://static.vecteezy.com/system/resources/previews/009/397/892/non_2x/woman-face-expression-clipart-design-illustration-free-png.png",
    room: 0,
    bed: 0,
    description:
      "Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. ",
  });
  return (
    <Card className="card-user py-2">
      <CardBody>
        <div className="author">
          <Link to="/monitor/patients/1">
            <img alt="..." className="avatar border-gray" src={info.image} />
            <h5 className="title">{info.name}</h5>
          </Link>
          <p className="description">
            Room {info.room} - Bed {info.bed}
          </p>
        </div>
        <p className="description text-center">{info.description}</p>
      </CardBody>
    </Card>
  );
}

export default UserInfo;

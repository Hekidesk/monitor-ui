/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// react plugin used to create charts

// reactstrap components

// core components
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";

import roomIcon from "assets/icons/hospital-bed.svg";
import bedIcon from "assets/icons/bed.svg";
import { Beds } from "variables/beds";
import { Link } from "react-router-dom";

function Dashboard() {
  const [info] = useState(Beds);

  return (
    <Container className="m-5">
      {info.map((item, id) => {
        return (
          <Row key={id}>
            <Card className="p-2" style={{ backgroundColor: "#E8F0F4" }}>
              <Container className="d-flex align-items-center gap-3">
                <img src={roomIcon} alt="bed" />
                <CardTitle
                  tag="h5"
                  style={{ minWidth: "5em" }}
                  className="ml-2 m-0"
                >
                  Room {item.name}
                </CardTitle>
                <CardBody>
                  <Row>
                    {item.bed.map((bed, index) => {
                      const data = Object.keys(bed)
                        .filter((i) => i !== "name")
                        .map((health, i) => (
                          <Col xs={12} md={6} key={health + i + bed.name}>
                            <b>
                              {health} : {bed[health]}
                            </b>
                          </Col>
                        ));
                      return (
                        <Col xs={12} md={6} key={index}>
                          <Link to="/monitor/live/id">
                            <Card className="p-2">
                              <Container className="d-flex align-items-center gap-3">
                                <img src={bedIcon} alt="bed" />
                                <CardTitle className="ml-2 m-0" tag="h6">
                                  Bed {bed.name}
                                </CardTitle>
                              </Container>
                              <CardBody>
                                <Row>{data}</Row>
                              </CardBody>
                            </Card>
                          </Link>
                        </Col>
                      );
                    })}
                  </Row>
                </CardBody>
              </Container>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
}

export default Dashboard;

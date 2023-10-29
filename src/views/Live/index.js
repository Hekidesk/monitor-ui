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
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

import Heartbeat from "./HeartBeat";
import SpO2 from "./SpO2";
import RespirationRate from "./RespirationRate";
import Temperature from "./Temperature";
import UserInfo from "./UserInfo";

function Live() {
  return (
    <>
      <Heartbeat />
      <div className="content">
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <UserInfo />
          </Col>
          <Col xs={12} md={6}>
            <SpO2 />
          </Col>
          <Col xs={12} md={6}>
            <RespirationRate />
          </Col>
          <Col xs={12} md={6}>
            <Temperature />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Live;

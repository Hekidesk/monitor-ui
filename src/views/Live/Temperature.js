import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import { Card, CardHeader, CardBody, CardFooter, CardTitle } from "reactstrap";

import { temperature } from "variables/temperature";

function Temperature() {
  return (
    <Card className="card-chart">
      <CardHeader>
        <CardTitle tag="h4">Temperature</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Line data={temperature.data} options={temperature.options} />
        </div>
      </CardBody>
      <CardFooter>
        <div className="stats">Today</div>
      </CardFooter>
    </Card>
  );
}
export default Temperature;

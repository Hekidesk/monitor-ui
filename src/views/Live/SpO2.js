import React from "react";

// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "reactstrap";

// core components
import { spo2Data } from "variables/spo2Data";

function SpO2() {
  return (
    <Card className="card-chart">
      <CardHeader>
        <CardTitle tag="h4">SpO2(%)</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Line
            data={spo2Data.data}
            options={spo2Data.options}
          />
        </div>
      </CardBody>
      <CardFooter>
        <div className="stats">Live</div>
      </CardFooter>
    </Card>
  );
}
export default SpO2;

import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import { Card, CardHeader, CardBody, CardFooter, CardTitle } from "reactstrap";

import { respirationRate } from "variables/respirationRate";

function RespirationRate() {
  return (
    <Card className="card-chart">
      <CardHeader>
        <CardTitle tag="h4">Respiration Rate (bpm)</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Line data={respirationRate.data} options={respirationRate.options} />
        </div>
      </CardBody>
      <CardFooter>
        <div className="stats">Live</div>
      </CardFooter>
    </Card>
  );
}

export default RespirationRate;

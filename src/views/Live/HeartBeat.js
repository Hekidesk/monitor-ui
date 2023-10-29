import React from "react";

// react plugin used to create charts
import { Line } from "react-chartjs-2";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { heartbeatData } from "variables/heartbeatData";

function Heartbeat() {
  return (
    <PanelHeader
      size="lg"
      content={
        <Line
          data={heartbeatData.data}
          options={heartbeatData.options}
        />
      }
    />
  );
}
export default Heartbeat;

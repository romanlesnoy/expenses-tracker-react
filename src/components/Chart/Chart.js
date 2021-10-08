import React from "react";

import ChartBars from "./ChartBars";
import "./Chart.css";

function Charts(props) {
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBars
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}

export default Charts;

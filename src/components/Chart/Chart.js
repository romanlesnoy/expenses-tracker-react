import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Charts(props) {
    const dataPointValuess = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );

    const totalMaxmum = Math.max(...dataPointValuess);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaxmum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}

export default Charts;

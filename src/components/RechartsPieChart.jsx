// FILEPATH: /c:/Users/fprezeau/marvel-app/src/components/RechartsPieChart.jsx

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import * as d3 from "d3";
import { prepareData } from './chart-utils';

const RechartsPieChart = ({ data }) => {
    const preparedData = prepareData(data);
    const colors = d3.schemeCategory10;

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={preparedData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
            >
                {preparedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 10]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default RechartsPieChart;
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieGraph = () => {
	const data = {
		datasets: [
			{
				data: [12, 5, 10],
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
				borderWidth: 0,
			},
		],
	};

  const option = {

  }
	return (
		<div className="bg-white p-8 rounded-[20px]">
			<div className="h-[28rem]">
				<Pie data={data} options={option} />
			</div>
		</div>
	);
};

export default PieGraph;

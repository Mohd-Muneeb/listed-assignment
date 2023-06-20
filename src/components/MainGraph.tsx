import React, { useEffect } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MainGraph = ({ GuestsLineGraph, GuestsLineColor, UsersLineColor, UsersLineGraph }: any) => {
	const data = {
		labels: ["", "Week 1", "Week 2", "Week 3", "Week4", ""],
		datasets: [
			{
				data: GuestsLineGraph,
				backgroundColor: "transparent",
				borderColor: GuestsLineColor,
				pointBorderColor: "transparent",
				pointBorderWidth: 4,
				tension: 0.4,
			},
			{
				data: UsersLineGraph,
				backgroundColor: "transparent",
				borderColor: UsersLineColor,
				pointBorderColor: "transparent",
				pointBorderWidth: 4,
				tension: 0.4,
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		tooltips: {
			callbacks: {
				label: function (tooltipItem: any) {
					return tooltipItem.yLabel;
				},
			},
		},
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				min: 0,
				max: 500,
				border: {
					display: false,
				},

				ticks: {
					stepSize: 100,
				},
			},
		},
	};

	return (
		<div className="w-full rounded-[20px] bg-white px-8 pb-2 pt-[2rem]">
			<div className="flex items-end justify-between">
				<div>
					<h1 className="text-lg font-bold">Activities</h1>
					<button className="flex items-center gap-2 text-sm opacity-70">
						May - June 2021{" "}
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
								<path
									d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z"
									fill="#858585"
								/>
							</svg>
						</span>
					</button>
				</div>
				<div className="flex gap-8">
					<div className="flex items-center gap-2">
						<div className="h-4 w-4 rounded-full bg-[#9BDD7C]">&nbsp;</div>
						<h1>Guest</h1>
					</div>
					<div className="flex items-center gap-2">
						<div className="h-4 w-4 rounded-full bg-[#E9A0A0]">&nbsp;</div>
						<h1>User</h1>
					</div>
				</div>
			</div>
			<div className="mt-4">
				<div className="my-4 h-[27.5vh] w-full">
					<Line data={data} options={options}></Line>
				</div>
			</div>
		</div>
	);
};

export default MainGraph;

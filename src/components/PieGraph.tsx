import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieGraph = ({ PieGraph }: any) => {
	const data = {
		datasets: [
			{
				data: PieGraph,
				backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
				borderWidth: 0,
			},
		],
	};

	const option = {
		radius: 70,
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<div className="max-h-full min-w-[480px] rounded-[20px] bg-white p-8">
			<div className="flex items-center justify-between">
				<h1 className="font-bold"> Top Products</h1>
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

			<div className="flex w-full items-center justify-between p-4">
				<div style={{ height: "150px", width: "150px" }} className="flex items-center justify-start p-0">
					<Pie data={data} options={option} />
				</div>
				<div className="flex flex-col justify-between  gap-4">
					{/* <div className="flex items-center gap-2 font-medium">
						<div className="h-4 w-4 rounded-full bg-[#F6DC7D]">&nbsp;</div>
						<h1 className="text-sm font-bold">Basic Tees</h1>
					</div>

					<div className="flex items-center gap-2 font-medium">
						<div className="h-4 w-4 rounded-full bg-[#EE8484]">&nbsp;</div>
						<div>
							<h1 className="text-sm font-bold">Custom Short Pants</h1>
						</div>
					</div> */}

					<div>
						<div className="flex items-center gap-4">
							<div className="h-[11px] w-[11px] rounded-full bg-[#F6DC7D]">&nbsp;</div>
							<h1 className="text-sm font-bold">Basic Tees</h1>
						</div>
						<div className="flex gap-4 mt-1">
							<div className="h-[11px] w-[11px]">&nbsp;</div>

							<p className="text-xs">{(PieGraph[0] / (PieGraph[0] + PieGraph[1] + PieGraph[2])) * 100} %</p>
						</div>
					</div>

					<div>
						<div className="flex items-center gap-4">
							<div className="h-[11px] w-[11px] rounded-full bg-[#EE8484]">&nbsp;</div>
							<h1 className="text-sm font-bold">Custom Short Pants</h1>
						</div>
						<div className="flex gap-4 mt-1">
							<div className="h-[11px] w-[11px]">&nbsp;</div>

							<p className="text-xs">{(PieGraph[1] / (PieGraph[0] + PieGraph[1] + PieGraph[2])) * 100} %</p>
						</div>
					</div>

					<div>
						<div className="flex items-center gap-4">
							<div className="h-[11px] w-[11px] rounded-full bg-[#9BDD7C]">&nbsp;</div>
							<h1 className="text-sm font-bold">Super Hoodies</h1>
						</div>
						<div className="flex gap-4 mt-1">
							<div className="h-[11px] w-[11px]">&nbsp;</div>

							<p className="text-xs">{(PieGraph[2] / (PieGraph[0] + PieGraph[1] + PieGraph[2])) * 100} %</p>
						</div>
					</div>
				</div>{" "}
			</div>
		</div>
	);
};

export default PieGraph;

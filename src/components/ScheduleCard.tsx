import React from "react";
import { ScheduleItem } from "~/types";

const ScheduleCard = ({ task }: any) => {
	console.log(task);
	return (
		<div className="flex items-center gap-4">
			{/* <div className="h-[3.5rem] bg-[#6972C3]"> */}

			<div className={`h-[3.5rem] bg-[${task.color}]`}>
				&nbsp;
				<br />
				&nbsp;
				<br />
			</div>
			<div className="flex flex-col gap-1 text-xs opacity-70 hover:opacity-100">
				{/* <h1 className="text-sm font-bold">Meeting with suppliers</h1> */}
				<h1 className="text-sm font-bold">{task.title}</h1>
				<p>{task.time}</p>
				<p>
					at <span className="capitalize">{task.location}</span>
				</p>
			</div>
		</div>
	);
};

export default ScheduleCard;

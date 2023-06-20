import React from "react";

const ScheduleCard = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="h-[3.5rem] bg-lime-400">
				&nbsp;
				<br />
				&nbsp;
				<br />
			</div>
			<div className="flex flex-col gap-1 text-xs opacity-70 hover:opacity-100">
				<h1 className="text-sm font-bold">Meeting with suppliers</h1>
				<p>14.00 - 15.00</p>
				<p>at Sunset Road</p>
			</div>
		</div>
	);
};

export default ScheduleCard;

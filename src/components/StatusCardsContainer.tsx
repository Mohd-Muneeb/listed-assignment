import React from "react";
import StatusCards from "./StatusCards";

const StatusCardsContainer = () => {
	return (
		<div className="my-8 flex gap-4">
			<StatusCards />
			<StatusCards />
			<StatusCards />
			<StatusCards />
		</div>
	);
};

export default StatusCardsContainer;

import Image from "next/image";
import React from "react";

const StatusCards = ({ items, color }: any) => {
	// const color = "#FFFFFF"

	console.log(items);
	return (
		<div className={`flex h-full w-full flex-col rounded-[20px] p-4 ${color}`}>
			<div className="flex h-full w-full items-center justify-end">
				<Image src={items.image} alt="None"></Image>
			</div>
			<div className="h-full w-full">
				<p className="text-sm">{items.title}</p>
				<h1 className="text-2xl font-bold">{items.Value}</h1>
			</div>
		</div>
	);
};

export default StatusCards;

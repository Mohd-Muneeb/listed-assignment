import React, { useEffect, useState } from "react";
import StatusCards from "./StatusCards";
import socials from "../../public/statussvg/socials.svg";
import payment from "../../public/statussvg/Payment.svg";
import like from "../../public/statussvg/like.svg";
import tag from "../../public/statussvg/tagSvg.svg";
import Image from "next/image";

const StatusCardsContainer = () => {
	const [Values, setValues] = useState<any[]>([]);

	useEffect(() => {
		const values = [
			{
				image: payment,
				color: "bg-[#DDEFE0]",
				title: "Total Revenues",
				Value: "$2,129,430",
			},
			{
				image: tag,
				color: "bg-[#F4ECDD]",
				title: "Total Transactions",
				Value: "1,520",
			},
			{
				image: like,
				color: "bg-[#EFDADA]",
				title: "Total Likes",
				Value: "9,721",
			},
			{
				image: socials,
				color: "bg-[#DEE0EF]",
				title: "Total Users",
				Value: "892",
			},
		];

		setValues(values);
	}, []);
	return (
		<div className="my-8 flex gap-4">
			{Values.map((elem: any) => (
				<StatusCards items={elem} key={elem.title} color={elem.color}/>
			))}
		</div>
	);
};

export default StatusCardsContainer;

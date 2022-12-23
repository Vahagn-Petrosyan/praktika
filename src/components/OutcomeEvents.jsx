import React, { useEffect, useState } from "react"

export const OutcomeEvents = ({ title, image, gradient, onClick }) => {
	return (
		<div
			className={`joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center ${gradient} cursor-pointer`}
			onClick={onClick}
		>
			<img src={image} className="w-28 h-28" />
			{/* <img src="/building.svg" className="w-28 h-28" /> */}
			<p className="text-white text-3xl font-bold text-center capitalize">{title}</p>
		</div>
	)
}

// bg-gradient-to-tr from-buildingl to-building2

import React from "react"

export const EventsContainer = ({ title, date, src }) => {
	return (
		<div className="max-w-[1072px] p-10 flex flex-row event-container tablet:gap-x-5 bg-white mt-20">
			<div className="flex flex-col gap-y-5 w-2/3 justify-center">
				<p className="text-[30px] font-bold">{title}</p>
				<span className="text-yellow font-medium text-[20px]">{date}</span>
				<p className="text-[14px] font-medium">
					Online - Anywhere w/Fast Wifi and Sound, Yerevan • Yerevan, Yerevan Free
				</p>
			</div>
			<img src={src} alt="" className="w-[408px] h-[206px] self-center" />
		</div>
	)
}

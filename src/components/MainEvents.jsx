import React, { useState } from "react"
import { events } from "../constants/events"
import { EventsContainer } from "./EventsContainer"
import { SearchBar } from "./SearchBar"

export const MainEvents = () => {
	const [inpValue, setInpValue] = useState("")

	let filterEvents = events.filter(item => item.title.toLowerCase().includes(inpValue.toLowerCase()))
	return (
		<div className="px-5 h-full event-main">
			<SearchBar inpValue={inpValue} setInpValue={setInpValue} />
			{filterEvents.length ? (
				filterEvents.map(item => (
					<EventsContainer title={item.title} date={item.date} key={item.id} src={item.src} />
				))
			) : (
				<span className="font-bold text-center">There's no such an event</span>
			)}
		</div>
	)
}

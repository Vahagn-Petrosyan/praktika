import React from "react"
import { MainEvents } from "../components/MainEvents"
import { Sidebar } from "../components/Sidebar"

const Events = () => {
	return (
		<main className="flex flex-row w-full">
			<Sidebar />
			<MainEvents />
		</main>
	)
}

export default Events

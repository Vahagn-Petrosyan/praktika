import React, { useState } from "react"
import { EventsDesc } from "./EventsDesc"
import { OutcomeEvents } from "./OutcomeEvents"

const eventsDesc = [
	{
		id: 1,
		title: "building",
		image: "/building.svg",
		gradient: "bg-gradient-to-tr from-buildingl to-building2",
		text: "The best event planner websites are able to grab a user’s attention and convince them to sign up. You should be able to put the focus on what makes your event so great and worth attending. Are you featuring a popular speaker or a celebrity guest perhaps? Is it because the event will take place in a beautiful venue? You need to get people excited about your event by painting a picture in their minds about what they should expect when they attend."
	},
	{
		id: 2,
		title: "marketing",
		image: "/marketing.svg",
		gradient: "bg-gradient-to-tr from-marketing1 to-marketing2",
		text: "Event marketing is a promotional strategy that involves face-to-face contact between brands and their customers at events like conferences, trade shows, and seminars. Each event is different, it has different audiences, different content, and different culture. Therefore, it deserves to be marketed in its own unique way. To succeed, the event marketer of the future needs to stay on top of the event marketing game."
	},
	{
		id: 3,
		title: "planning",
		image: "/planning.svg",
		gradient: "bg-gradient-to-tr from-planning1 to-planning2",
		text: "Event planning is the organisation of all of the activities that surround an event. This could be a party, a festival, a conference or a tradeshow. Planning an event takes lots of work and key organisational skills. Event planners will often work on everything from catering, to entertainment, booking presenters and managing exhibitors. The event planning process ensures that all of these areas are covered, that the event remains within budget and that it is delivered on time and fulfils the event objective(s)."
	},
	{
		id: 4,
		title: "monetizing",
		image: "/monetizing.svg",
		gradient: "bg-gradient-to-tr from-monetizing1 to-monetizing2",
		text: "Information leaders increasingly grasp the idea that information adds value to their organization beyond mere operational excellence and decision making. They can realize that value by taking a disciplined approach to monetizing available information assets."
	}
]
export const JoinUs = () => {
    const [desc, setDesc] = useState('')
    console.log(desc)
	return (
		<div className="w-full mt-24 flex flex-col items-center">
			<p className="uppercase text-lg font-medium text-center">why join us</p>
			<h1 className="text-yellow text-4xl font-extrabold text-center">Event Outcomes</h1>
			<img src="/Vector.svg" className="mt-7" />
			<div className="flex flex-row gap-x-9 mt-20">
				{eventsDesc.map(item => (
					<OutcomeEvents
						gradient={item.gradient}
						title={item.title}
						image={item.image}
						key={item.id}
                        onClick = {() => setDesc(item.text)}
					/>
				))}
				{/* <div
					onClick={() => setOpenDesc(true)}
					className="joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center bg-gradient-to-tr from-buildingl to-building2"
				>
					<img src="/building.svg" className="w-28 h-28" />
					<p className="text-white text-3xl font-bold text-center capitalize">building</p>
				</div>
				<div
					onClick={() => setOpenDesc(true)}
					className="joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center bg-gradient-to-tr from-marketing1 to-marketing2"
				>
					<img src="/marketing.svg" className="w-28 h-28" />
					<p className="text-white text-3xl font-bold text-center capitalize">marketing</p>
				</div>
				<div
					onClick={() => setOpenDesc(true)}
					className="joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center bg-gradient-to-tr from-planning1 to-planning2"
				>
					<img src="/planning.svg" className="w-28 h-28" />
					<p className="text-white text-3xl font-bold text-center capitalize">planning</p>
				</div>
				<div
					onClick={() => setOpenDesc(true)}
					className="joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center bg-gradient-to-tr from-monetizing1 to-monetizing2"
				>
					<img src="/monetizing.svg" className="w-28 h-28" />
					<p className="text-white text-3xl font-bold text-center capitalize">monetizing</p>
				</div> */}
			</div>
            {desc && <EventsDesc text = {desc}/>}
		</div>
	)
}

import React from "react"
import { Dropdown } from "./Dropdown"
import { ListItem } from "./ListItem"

export const Sidebar = () => {
	return (
		<aside className="min-h-screen flex flex-col px-16 py-12 w-[404px] bg-sidebar">
			<h2 className="font-medium text-4xl">Filters</h2>
			<div className="flex flex-col mt-20 gap-8 h-full w-full">
				<Dropdown title="Price">
					<ListItem>Any</ListItem>
					<ListItem>Free</ListItem>
					<ListItem>Paid</ListItem>
				</Dropdown>
				<Dropdown title="Category">
					<li>Category</li>
					<li>Community</li>
					<li>Sience & Tech</li>
					<li>Goverment</li>
					<li>Other</li>
				</Dropdown>
			</div>
		</aside>
	)
}

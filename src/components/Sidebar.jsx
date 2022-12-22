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
					<ListItem>Business</ListItem>
					<ListItem>Community</ListItem>
					<ListItem>Science & Tech</ListItem>
					<ListItem>Goverment</ListItem>
					<ListItem>Other</ListItem>
				</Dropdown>
				<Dropdown title="Format">
					<ListItem>Class</ListItem>
					<ListItem>Conference</ListItem>
					<ListItem>Expo</ListItem>
					<ListItem>Other</ListItem>
				</Dropdown>
				<Dropdown title="Language">
					<ListItem>Any</ListItem>
					<ListItem>Armenian</ListItem>
					<ListItem>Russian</ListItem>
					<ListItem>English</ListItem>
				</Dropdown>
				<Dropdown title="Currency">
					<ListItem>USD</ListItem>
					<ListItem>Euro</ListItem>
					<ListItem>RUB</ListItem>
					<ListItem>AMD</ListItem>
				</Dropdown>
			</div>
		</aside>
	)
}

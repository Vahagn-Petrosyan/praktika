import React, { useState } from "react"
import { BiChevronRight } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import "./dropdown.css"

export const Dropdown = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className="w-full flex flex-col relative">
			<div className="w-full flex items-center justify-between">
				<span className="font-medium text-[20px]">{title}</span>
				{!isOpen ? (
					<BiChevronRight size="25" className="cursor-pointer" onClick={() => setIsOpen(true)} />
				) : (
					<IoClose size="25" className="cursor-pointer" onClick={() => setIsOpen(false)} />
				)}
			</div>
			<ul className={`dropdown ${isOpen ? "active" : ""}`}>{children}</ul>
		</div>
	)
}

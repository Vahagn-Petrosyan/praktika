import React, { useRef, useState, useEffect } from "react"

export const ListItem = ({ children }) => {
	const [isClicked, setIsClicked] = useState(false)
	return (
		<li className="cursor-pointer">
			{children}
		</li>
	)
}

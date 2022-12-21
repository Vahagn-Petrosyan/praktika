import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
	const location = useLocation()
	const [scrollWidth, setScrollWidth] = useState(0)
	const navbarRef = useRef()
	const handleNavbarToggle = () => {
		setScrollWidth(window.scrollY)
	}

	useEffect(() => {
		document.addEventListener("scroll", handleNavbarToggle)

		return () => document.removeEventListener("scroll", handleNavbarToggle)
	}, [])
	if (location.pathname == "/") {
		return (
			<nav
				className={`flex flex-row gap-[170px] h-[126px] w-full fixed ${
					!scrollWidth ? "bg-transparent transition-all " : "bg-white transition-all"
				} items-center justify-center z-100`}
				ref={navbarRef}
			>
				<h1 className="text-yellow text-4xl mb-[5px]">EvenTracking</h1>
				<ul className="flex flex-row items-center gap-x-11">
					<li className={`${!scrollWidth ? "text-white" : "text-black"}`}>
						<Link to="/">Home</Link>
					</li>
					<li className={`${!scrollWidth ? "text-white" : "text-black"}`}>
						<Link to="/about">About</Link>
					</li>
					<li className={`${!scrollWidth ? "text-white" : "text-black"}`}>
						<Link to="/events">Events</Link>
					</li>
					<li className={`${!scrollWidth ? "text-white" : "text-black"}`}>
						<Link to="/">Blog</Link>
					</li>
				</ul>

				<div className="flex flex-row item-center gap-10">
					<button className="bg-transparent text-yellow border border-yellow">log in</button>
					<button>sign up</button>
				</div>
			</nav>
		)
	} else {
		return (
			<nav
				className={`flex flex-row gap-[170px] h-[126px] w-full sticky top-0 left-0 bg-white items-center justify-center z-50`}
				ref={navbarRef}
			>
				<h1 className="text-yellow text-4xl mb-[5px]">EvenTracking</h1>
				<ul className="flex flex-row items-center gap-x-11">
					<li className="text-black">
						<Link to="/">Home</Link>
					</li>
					<li className="text-black">
						<Link to="/about">About</Link>
					</li>
					<li className="text-black">
						<Link to="/events">Events</Link>
					</li>
					<li className="text-black">
						<Link to="/">Blog</Link>
					</li>
				</ul>

				<div className="flex flex-row item-center gap-10">
					<button className="bg-transparent text-yellow border border-yellow">log in</button>
					<button>sign up</button>
				</div>
			</nav>
		)
	}
}

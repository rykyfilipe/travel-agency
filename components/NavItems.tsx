import React from 'react'
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "../lib/utils";

const NavItems = ({toggleSidebar}: { toggleSidebar?: () => void }) => {
	const user = {
		name: 'RYKY',
		email: 'b.ryky.filipe@gmail.com',
		imageUrl: '/assets/images/david.webp'
	}

	return (
		<section className="nav-items">
			<Link className="link-logo" to="/">
				<img src="/assets/icons/logo.svg" alt="Logo"
				     className="size-[30px]"/>
				<h1>Tourvisto</h1>
			</Link>
			<div className="container">
				<nav className="nav">
					{sidebarItems.map(({id, href, icon, label}) => (
						<NavLink to={href} key={href}>
							{({isActive}: { isActive: boolean }) => (
								<div className={cn('group nav-item', {
									'bg-primary-100 !text-white': isActive
								})} onClick={toggleSidebar}>
									<img src={icon} alt="Logo"
									     className={`group-hover:brightness-0 size-0 group-hover-invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}/>
									{label}</div>
							)
							}

						</NavLink>
					))}
				</nav>
				<footer className="nav-footer">
					<img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || 'RYKY'}/>
					<article>
						<h2>{user?.name}</h2>
						<h2>{user?.email}</h2>
					</article>
					<button onClick={() => {
						console.log("logout")
					}} className="cursor-pointer">
						<img src="/assets/icons/logout.svg" alt="Logout" className="size-6"/>
					</button>
				</footer>
			</div>
		</section>
	)
}
export default NavItems

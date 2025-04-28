// @ts-nocheck

import React, {useRef} from 'react';
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import {NavItems} from "./index";
import {Link} from "react-router";

const MobileSidebar = () => {
	const sidebar = useRef<SidebarComponent>(null);
	const toggleSidebar = () => sidebar.current?.toggle()

	return (
		<div className="mobile-sidebar wrapper">
			<header>
				<Link to="/">
					<img src="/assets/icons/loader.svg" alt="Logo" className="size-[30px]"/>
					<h1>Tourvisto</h1>
				</Link>
				<button className="cursor-pointer" aria-label="Toggle Sidebar"
				        onClick={toggleSidebar}>
					<img src="/assets/icons/menu.svg" alt="Menu" className="size-7"/>
				</button>
			</header>

			<SidebarComponent
				width={270}
				ref={sidebar}
				created={() => sidebar.current?.hide()}
				closeOnDocumentClick={true}
				showBackdrop={true}
				type="Over">
				<NavItems toggleSidebar={toggleSidebar}/>
			</SidebarComponent>
		</div>
	);
}

export default MobileSidebar;

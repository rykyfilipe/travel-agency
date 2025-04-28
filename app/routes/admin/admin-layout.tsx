import React from 'react'
import {Outlet} from "react-router";
import {MobileSidebar, NavItems} from "../../../components";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";

const AdminLayout = () => {
	return (
		<div className="admin-layout">
			<MobileSidebar/>
			<aside className="w-full max-w-[270px] hidden lg:block">
				<SidebarComponent className="width={270px} ">
					<NavItems/>
				</SidebarComponent>
			</aside>
			<aside className="childreen">
				<Outlet/>
			</aside>
		</div>
	)
}
export default AdminLayout

import React from 'react'
import {Header} from '../../../components/index'

function Dashboard() {
	const user = {name: 'RYKY'};

	return (
		<main className="dashboard wrapper">
			<Header title={`Welcome ${user?.name ?? 'Guest'}`}
			        description="Track activity, trends and popular destionations in real time"
			/>
			Dashboard page contents
		</main>
	)
}

export default Dashboard

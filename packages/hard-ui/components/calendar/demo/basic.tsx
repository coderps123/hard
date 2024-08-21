import { Calendar } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Calendar defaultValue={new Date(2021, 9, 18)} onChange={(date) => console.log(date.toLocaleString())} />
		</div>
	)
}

export default App

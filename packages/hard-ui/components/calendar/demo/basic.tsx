import { Calendar } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Calendar onChange={(date) => console.log(date.format('YYYY-MM-DD'))} />
		</div>
	)
}

export default App

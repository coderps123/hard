import dayjs from 'dayjs'
import { Calendar } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Calendar value={dayjs('2024-8-21')} />
		</div>
	)
}

export default App

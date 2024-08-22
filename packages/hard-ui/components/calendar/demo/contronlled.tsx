import dayjs from 'dayjs'
import { Calendar } from 'hard-ui'
import React, { useState } from 'react'

const App: React.FC = () => {
	const [date, setDate] = useState(dayjs())
	return (
		<div>
			<Calendar value={date} onChange={setDate} />
		</div>
	)
}

export default App

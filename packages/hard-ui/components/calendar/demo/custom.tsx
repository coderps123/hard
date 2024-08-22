import dayjs from 'dayjs'
import { Calendar } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Calendar dateCellRender={(date) => <div>{date.format('YYYY-MM-DD')}</div>} />
			<Calendar value={dayjs()} dateFullCellRender={(date) => <div>{date.format('YYYY-MM-DD')}</div>} />
		</div>
	)
}

export default App

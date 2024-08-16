import { Switch } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div>
				<Switch disabled />
				<Switch disabled checked />
			</div>
		</div>
	)
}

export default App

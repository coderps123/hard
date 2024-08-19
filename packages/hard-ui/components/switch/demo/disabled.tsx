import { Space, Switch } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space>
			<Switch disabled />
			<Switch disabled checked />
		</Space>
	)
}

export default App

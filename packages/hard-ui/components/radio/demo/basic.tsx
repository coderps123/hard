import { Radio, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space>
			<Radio>option1</Radio>
			<Radio checked>option2</Radio>
		</Space>
	)
}

export default App

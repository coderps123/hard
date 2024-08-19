import { Radio, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Radio.Group value={1}>
			<Space>
				<Radio>option1</Radio>
				<Radio value={1}>option2</Radio>
			</Space>
		</Radio.Group>
	)
}

export default App

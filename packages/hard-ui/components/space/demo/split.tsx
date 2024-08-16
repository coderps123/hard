import { Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Space size='small' split={<span style={{ marginRight: '8px', color: '#ddd' }}>/</span>}>
				<div>link1</div>
				<div>link2</div>
				<div>link3</div>
			</Space>
			<Space size='small' split={<span style={{ marginRight: '8px', color: '#ddd' }}>-</span>}>
				<div>link1</div>
				<div>link2</div>
				<div>link3</div>
			</Space>
		</div>
	)
}

export default App

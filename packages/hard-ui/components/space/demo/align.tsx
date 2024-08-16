import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Space align='start'>
				<div style={{ background: 'orange', height: '42px', padding: '12px', color: '#fff', borderRadius: '8px' }}>
					You are so good
				</div>
				<div style={{ background: '#ff5900', height: '32px', padding: '12px', color: '#fff', borderRadius: '8px' }}>
					You are so good
				</div>
				<Button>You are so pretty</Button>
			</Space>
		</div>
	)
}

export default App

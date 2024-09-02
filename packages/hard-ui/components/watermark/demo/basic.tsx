import { Watermark } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Watermark>
				<div style={{ height: '500px' }}></div>
			</Watermark>
		</div>
	)
}

export default App

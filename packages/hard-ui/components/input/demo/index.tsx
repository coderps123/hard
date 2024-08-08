import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Input placeholder='placeholder' clearable style={{ width: '240px' }} />
			</div>
		</div>
	)
}

export default App

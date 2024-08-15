import { Button } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Button disabled type='primary'>
					Primary
				</Button>
				<Button disabled style={{ marginLeft: '20px' }}>
					Default
				</Button>
				<Button disabled style={{ marginLeft: '20px' }} type='dashed'>
					Dashed
				</Button>
				<Button disabled style={{ marginLeft: '20px' }} type='text'>
					Text
				</Button>
			</div>
		</div>
	)
}

export default App

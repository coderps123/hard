import { Plus } from '@hard-ui/icons'
import { Button } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Button icon={<Plus />}></Button>
				<Button icon={<Plus />}>Plus</Button>
			</div>
		</div>
	)
}

export default App

import { Button } from 'hard-ui'
import { Plus, Edit, Search, Delete } from '@hard-ui/icons'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Button type='primary' icon={<Edit />} />
				<Button type='primary' style={{ marginLeft: '20px' }} icon={<Plus />} />
				<Button type='primary' style={{ marginLeft: '20px' }} icon={<Delete />} />
				<Button type='primary' style={{ marginLeft: '20px' }} icon={<Search />}>
					Search
				</Button>
				<Button type='primary' style={{ marginLeft: '20px' }}>
					Upload <Plus className='h-icon--right' />
				</Button>
			</div>
		</div>
	)
}

export default App

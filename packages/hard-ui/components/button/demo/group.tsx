import { Plus, Delete, Edit } from '@hard-ui/icons'
import { Button } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Button.Group type='primary'>
				<Button icon={<Plus />}>Previous Page</Button>
				<Button>
					Next Page
					<Plus className='h-icon--right' />
				</Button>
			</Button.Group>

			<Button.Group className='ml-10' style={{ marginLeft: '20px' }}>
				<Button type='primary' icon={<Delete />}></Button>
				<Button type='primary'>
					<Edit />
				</Button>
				<Button type='primary'>
					<Plus />
				</Button>
			</Button.Group>
		</div>
	)
}

export default App

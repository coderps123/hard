import { Delete, Edit, Plus } from '@hard-ui/icons'
import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space>
			<Button.Group type='primary'>
				<Button icon={<Plus />}>Previous Page</Button>
				<Button>
					Next Page
					<Plus className='h-icon--right' />
				</Button>
			</Button.Group>

			<Button.Group>
				<Button type='primary' icon={<Delete />}></Button>
				<Button type='primary'>
					<Edit />
				</Button>
				<Button type='primary'>
					<Plus />
				</Button>
			</Button.Group>
		</Space>
	)
}

export default App

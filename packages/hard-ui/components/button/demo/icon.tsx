import { Delete, Edit, Plus, Search } from '@hard-ui/icons'
import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space>
			<Button type='primary' icon={<Edit />} />
			<Button type='primary' icon={<Plus />} />
			<Button type='primary' icon={<Delete />} />
			<Button type='primary' icon={<Search />}>
				Search
			</Button>
			<Button type='primary'>
				Upload <Plus className='h-icon--right' />
			</Button>
		</Space>
	)
}

export default App

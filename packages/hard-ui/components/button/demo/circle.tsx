import { Button } from 'hard-ui'
import { Plus, Edit, Delete } from '@hard-ui/icons'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div className='mb-4'>
				<Button type='primary' circle icon={<Edit />} />
				<Button circle icon={<Plus />} style={{ marginLeft: '20px' }} />
				<Button type='dashed' circle icon={<Delete />} style={{ marginLeft: '20px' }} />
			</div>
		</div>
	)
}

export default App

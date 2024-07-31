import { Button } from 'element-plus-react'
import { Plus } from 'element-plus-react/icons'
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

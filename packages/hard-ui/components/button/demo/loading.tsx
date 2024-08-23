import { Plus } from '@hard-ui/icons'
import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space>
			<Button type='primary' loading>
				Primary
			</Button>
			<Button type='primary' loading icon={<Plus spin />}>
				Primary
			</Button>
		</Space>
	)
}

export default App

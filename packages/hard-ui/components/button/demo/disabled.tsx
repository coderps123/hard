import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => (
	<div>
		<Space>
			<Button disabled>Default</Button>
			<Button type='primary' disabled>
				Primary
			</Button>
			<Button type='success' disabled>
				Success
			</Button>
			<Button type='info' disabled>
				Info
			</Button>
			<Button type='warning' disabled>
				Warning
			</Button>
			<Button type='danger' disabled>
				Danger
			</Button>
		</Space>
		<Space>
			<Button plain disabled>
				Plain
			</Button>
			<Button type='primary' plain disabled>
				Primary
			</Button>
			<Button type='success' plain disabled>
				Success
			</Button>
			<Button type='info' plain disabled>
				Info
			</Button>
			<Button type='warning' plain disabled>
				Warning
			</Button>
			<Button type='danger' plain disabled>
				Danger
			</Button>
		</Space>
	</div>
)

export default App

import { Alert, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => (
	<Space direction='vertical'>
		<Alert showIcon type='primary' title='Primary alert' />
		<Alert showIcon type='success' title='Success alert' />
		<Alert showIcon type='info' title='Info alert' />
		<Alert showIcon type='warning' title='Warning alert' />
		<Alert showIcon type='error' title='error alert' />
	</Space>
)

export default App

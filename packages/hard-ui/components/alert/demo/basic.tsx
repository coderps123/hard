import { Alert, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => (
	<Space direction='vertical'>
		<Alert type='primary' title='Primary alert' />
		<Alert type='success' title='Success alert' />
		<Alert type='info' title='Info alert' />
		<Alert type='warning' title='Warning alert' />
		<Alert type='error' title='error alert' />
	</Space>
)

export default App

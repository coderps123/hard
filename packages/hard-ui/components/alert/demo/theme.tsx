import { Alert, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => (
	<Space direction='vertical'>
		<Alert title='Primary alert' type='primary' effect='dark' />
		<Alert title='Success alert' type='success' effect='dark' />
		<Alert title='Info alert' type='info' effect='dark' />
		<Alert title='Warning alert' type='warning' effect='dark' />
		<Alert title='Error alert' type='error' effect='dark' />
	</Space>
)

export default App

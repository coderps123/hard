import { Alert, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => (
	<Space direction='vertical'>
		<Alert center showIcon type='primary' title='Primary alert' />
		<Alert center showIcon type='success' title='Success alert' />
		<Alert center showIcon type='info' title='Info alert' />
		<Alert center showIcon type='warning' title='Warning alert' />
		<Alert center showIcon type='error' title='error alert' />
	</Space>
)

export default App

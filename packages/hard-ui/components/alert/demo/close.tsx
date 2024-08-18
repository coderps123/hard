import { Alert, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	const hello = () => {
		alert('Hello World!')
	}

	return (
		<Space direction='vertical'>
			<Alert type='primary' title='Primary alert' closable={false} />
			<Alert type='success' title='Success alert' closeText='close' />
			<Alert type='warning' title='Warning alert' onClose={hello} />
		</Space>
	)
}

export default App

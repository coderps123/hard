import { Alert, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => (
	<Space direction='vertical'>
		<Alert type='primary' title='Primary alert' description='这是一段文字描述' />
		<Alert type='success' title='Success alert' description='这是一段文字描述' />
		<Alert showIcon type='info' title='Info alert' description='这是一段文字描述' />
		<Alert showIcon type='warning' title='Warning alert' description='这是一段文字描述' />
		<Alert showIcon type='error' title='error alert' description='这是一段文字描述' />
	</Space>
)

export default App

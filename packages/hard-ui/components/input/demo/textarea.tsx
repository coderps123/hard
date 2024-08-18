import { Input, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space direction='vertical'>
			<Input.TextArea value='带字数提示的文本域。' clearable showCount maxLength={100} />
			<Input.TextArea value='带字数提示的文本域。' showCount />
			<Input.TextArea value='disabled' clearable disabled showCount maxLength={100} style={{ marginTop: '20px' }} />
		</Space>
	)
}

export default App

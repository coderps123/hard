import { Input, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space>
			<Input.TextArea style={{ width: '300px' }} value='带字数提示的文本域。' clearable showCount maxLength={100} />
			<Input.TextArea style={{ width: '300px' }} value='带字数提示的文本域。' showCount />
			<Input.TextArea style={{ width: '300px' }} value='disabled' clearable disabled showCount maxLength={100} />
		</Space>
	)
}

export default App

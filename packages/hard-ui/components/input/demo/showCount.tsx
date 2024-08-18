import { Input, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		console.log('Change:', e.target.value)
	}
	return (
		<Space direction='vertical'>
			<Input style={{ width: '300px' }} showCount maxLength={20} onChange={onChange} />
			<Input style={{ width: '300px' }} maxLength={20} onChange={onChange} />
			<Input style={{ width: '300px' }} showCount onChange={onChange} />
		</Space>
	)
}

export default App

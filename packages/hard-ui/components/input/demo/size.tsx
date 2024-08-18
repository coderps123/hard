import { Search } from '@hard-ui/icons'
import { Input, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space>
			<Space direction='vertical'>
				<Input style={{ width: '300px' }} size='large' placeholder='Please Input' />
				<Input style={{ width: '300px' }} placeholder='Please Input' />
				<Input style={{ width: '300px' }} size='small' placeholder='Please Input' />
			</Space>
			<Space direction='vertical'>
				<Input
					style={{ width: '300px' }}
					size='large'
					placeholder='Please Input'
					addonBefore='http://'
					addonAfter='.com'
				/>
				<Input
					v-model='input1'
					style={{ width: '300px' }}
					placeholder='Please Input'
					addonBefore='http://'
					addonAfter='.com'
				/>
				<Input style={{ width: '300px' }} size='small' placeholder='Please Input' addonAfter={<Search />} />
			</Space>
		</Space>
	)
}

export default App

import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div>
				<Input style={{ width: '600px', marginTop: '10px' }} size='large' placeholder='Please Input' />
				<Input style={{ width: '600px', marginTop: '10px', marginLeft: '10px' }} placeholder='Please Input' />
				<Input
					style={{ width: '600px', marginTop: '10px', marginLeft: '10px' }}
					size='small'
					placeholder='Please Input'
				/>
			</div>
			<div>
				<Input
					style={{ width: '600px', marginTop: '10px' }}
					size='large'
					placeholder='Please Input'
					addonBefore='http://'
					addonAfter='.com'
				/>
				<Input
					v-model='input1'
					style={{ width: '600px', marginTop: '10px' }}
					placeholder='Please Input'
					addonBefore='http://'
					addonAfter='.com'
				/>
				<Input
					style={{ width: '600px', marginTop: '10px' }}
					size='small'
					placeholder='Please Input'
					addonBefore='http://'
					addonAfter='.com'
				/>
			</div>
		</div>
	)
}

export default App

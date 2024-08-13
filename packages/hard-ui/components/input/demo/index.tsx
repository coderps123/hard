import { Input } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<div>
				<Input.TextArea value='带字数提示的文本域。' showCount maxLength={100} style={{ width: '240px' }} />
				<Input.TextArea value='带字数提示的文本域。' showCount style={{ width: '240px', marginLeft: '20px' }} />
				<Input.TextArea
					value='disabled'
					disabled
					showCount
					maxLength={100}
					style={{ width: '240px', marginLeft: '20px' }}
				/>
			</div>
		</div>
	)
}

export default App

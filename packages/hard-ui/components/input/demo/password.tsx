import { Input, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<Space>
			<Input.Password value='1234' style={{ width: '300px' }} />
			<Input.Password
				value='1234'
				visibilityToggle={{
					visible: true,
					onVisibleChange(visible) {
						console.log(visible)
					}
				}}
				iconRender={(visible) => (visible ? '显示' : '隐藏')}
				style={{ width: '300px' }}
			/>
		</Space>
	)
}

export default App

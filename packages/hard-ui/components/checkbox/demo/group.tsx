import { Radio, Space } from 'hard-ui'
import React, { useState } from 'react'

const App: React.FC = () => {
	const [value, setValue] = useState<number>(1)

	const onChange = (val: number) => {
		console.log(val)
		setValue(val)
	}
	return (
		<div>
			<h3>横向</h3>
			<Radio.Group onChange={onChange} value={value}>
				<Space>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Space>
			</Radio.Group>
			<h3>纵向</h3>
			<Radio.Group onChange={onChange} value={value}>
				<Space direction='vertical'>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Space>
			</Radio.Group>
		</div>
	)
}

export default App

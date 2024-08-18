import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	const buttons = [
		{ type: undefined, text: 'plain' },
		{ type: 'primary', text: 'primary' },
		{ type: 'success', text: 'success' },
		{ type: 'info', text: 'info' },
		{ type: 'warning', text: 'warning' },
		{ type: 'danger', text: 'danger' }
	] as const
	return (
		<Space direction='vertical'>
			<Space>
				{buttons.map((button) => {
					return (
						<Button key={button.text} type={button.type} text>
							{button.text}
						</Button>
					)
				})}
			</Space>
			<Space>
				{buttons.map((button) => {
					return (
						<Button key={button.text} type={button.type} text bg>
							{button.text}
						</Button>
					)
				})}
			</Space>
			<Space>
				{buttons.map((button) => {
					return (
						<Button key={button.text} type={button.type} text disabled>
							{button.text}
						</Button>
					)
				})}
			</Space>
		</Space>
	)
}

export default App

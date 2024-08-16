import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
			<div style={{ width: '200px' }}>
				<Space direction='vertical'>
					<Button>add</Button>
					<Button>edit</Button>
					<Button>delete</Button>
				</Space>
			</div>
			<div style={{ width: '200px' }}>
				<Space direction='vertical' align='center'>
					<Button>add</Button>
					<Button>edit</Button>
					<Button>delete</Button>
				</Space>
			</div>
			<div style={{ width: '200px' }}>
				<Space direction='vertical' align='end'>
					<Button>add</Button>
					<Button>edit</Button>
					<Button>delete</Button>
				</Space>
			</div>
		</div>
	)
}

export default App

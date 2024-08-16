import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Space size='default'>
				default
				<Button>新增</Button>
				<Button>保存</Button>
				<Button>取消</Button>
			</Space>
		</div>
	)
}

export default App

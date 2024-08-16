import { Edit, Search } from '@hard-ui/icons'
import { Switch, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Space>
				<Switch checkedChildren='开启了' unCheckedChildren='关闭了' checked />
				<Switch checkedChildren='1' unCheckedChildren='0' />
				<Switch checkedChildren={<Search />} unCheckedChildren={<Edit />} checked />
			</Space>
		</div>
	)
}

export default App

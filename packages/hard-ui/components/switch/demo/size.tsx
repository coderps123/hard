import { Edit, Search } from '@hard-ui/icons'
import { Space, Switch } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Space>
				<Switch size='large' checkedChildren='开启了' unCheckedChildren='关闭了' checked />
				<Switch checkedChildren={<Search />} unCheckedChildren={<Edit />} checked />
				<Switch size='small' checkedChildren='1' unCheckedChildren='0' />
			</Space>
		</div>
	)
}

export default App

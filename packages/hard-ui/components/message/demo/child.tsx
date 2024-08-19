import { Edit, Search } from '@hard-ui/icons'
import { Space, Switch } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Space>
				<Switch checkedChildren='开启了' unCheckedChildren='关闭了' checked />
				<Switch checkedChildren='1' unCheckedChildren='0' />
				<Switch checkedChildren={<Search />} unCheckedChildren={<Edit />} checked />
				<Switch checkedChildren='长文本测试呀呀呀' unCheckedChildren={<Edit />} checked />
			</Space>
		</div>
	)
}

export default App

import { Search } from '@hard-ui/icons'
import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => {
	return (
		<div>
			<Space>
				<Button size='large'>Large</Button>
				<Button>Default</Button>
				<Button size='small'>Small</Button>
				<Button size='large' icon={<Search />}>
					Search
				</Button>
				<Button icon={<Search />}>Search</Button>
				<Button size='small' icon={<Search />}>
					Search
				</Button>
			</Space>
			<Space>
				<Button size='large' round>
					Large
				</Button>
				<Button round>Default</Button>
				<Button size='small' round>
					Small
				</Button>
				<Button size='large' icon={<Search />} round>
					Search
				</Button>
				<Button icon={<Search />} round>
					Search
				</Button>
				<Button size='small' icon={<Search />} round>
					Search
				</Button>
			</Space>
			<Space>
				<Button icon={<Search />} size='large' circle />
				<Button icon={<Search />} circle />
				<Button icon={<Search />} size='small' circle />
			</Space>
		</div>
	)
}

export default App

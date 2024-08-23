import { Edit } from '@hard-ui/icons'
import { Button, Space } from 'hard-ui'
import React from 'react'

const App: React.FC = () => (
	<Space direction='vertical'>
		<Space>
			<Button>Default </Button>
			<Button type='primary'>Primary</Button>
			<Button type='success'>Success</Button>
			<Button type='info'>Info</Button>
			<Button type='warning'>Warning</Button>
			<Button type='danger'>Danger</Button>
		</Space>

		<Space>
			<Button plain>Plain</Button>
			<Button type='primary' plain>
				Primary
			</Button>
			<Button type='success' plain>
				Success
			</Button>
			<Button type='info' plain>
				Info
			</Button>
			<Button type='warning' plain>
				Warning
			</Button>
			<Button type='danger' plain>
				Danger
			</Button>
		</Space>

		<Space>
			<Button round>Round</Button>
			<Button type='primary' round>
				Primary
			</Button>
			<Button type='success' round>
				Success
			</Button>
			<Button type='info' round>
				Info
			</Button>
			<Button type='warning' round>
				Warning
			</Button>
			<Button type='danger' round>
				Danger
			</Button>
		</Space>

		<Space>
			<Button icon={<Edit onClick={(e) => console.log(e)} />} circle />
			<Button icon={<Edit />} type='primary' circle />
			<Button icon={<Edit />} type='success' circle />
			<Button icon={<Edit />} type='info' circle />
			<Button icon={<Edit />} type='warning' circle />
			<Button icon={<Edit />} type='danger' circle />
		</Space>
	</Space>
)

export default App

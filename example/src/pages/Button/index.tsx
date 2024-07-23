import { Button } from 'hard'
import { LeftOutlined, RightOutlined, FormOutlined, ShareAltOutlined, DeleteOutlined } from '@ant-design/icons'

export const ButtonPage = () => {
	const click = () => {}
	return (
		<div>
			<Button.Group type='primary'>
				<Button icon={<LeftOutlined />}>Previous Page</Button>
				<Button>
					Next Page
					<RightOutlined />
				</Button>
			</Button.Group>

			<Button.Group type='primary'>
				<Button icon={<FormOutlined />}></Button>
				<Button type='success' icon={<ShareAltOutlined />}></Button>
				<Button icon={<DeleteOutlined />}></Button>
			</Button.Group>
		</div>
	)
}

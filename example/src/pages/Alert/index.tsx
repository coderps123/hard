import { Alert } from 'hard'
import { LeftOutlined, RightOutlined, FormOutlined, ShareAltOutlined, DeleteOutlined } from '@ant-design/icons'

export const AlertPage = () => {
	return (
		<div>
			<Alert title='Success alert' type='success' />
			<Alert title='Info alert' type='info' />
			<Alert title='Warning alert' type='warning' />
			{/* <Alert title='Error alert' type='error' /> */}
		</div>
	)
}

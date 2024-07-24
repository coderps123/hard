import { Alert } from 'hard'
import { LeftOutlined, RightOutlined, FormOutlined, ShareAltOutlined, DeleteOutlined } from '@ant-design/icons'

export const AlertPage = () => {
	return (
		<div>
			<Alert title='Success alert' type='success' />
			<Alert title='Info alert' type='info' />
			<Alert title='Warning alert' type='warning' />
			{/* <Alert title='Error alert' type='error' /> */}

			<Alert title='Success alert' type='success' effect='dark' />
			<Alert title='Info alert' type='info' effect='dark' />
			<Alert title='Warning alert' type='warning' effect='dark' />
			{/* <Alert title='Error alert' type='error' /> */}

			<Alert title='Success alert' type='success' closable={false} />
			<Alert title='Error alert' type='error' closeText='关闭' />
			<Alert title='Info alert' type='info' />

			<Alert title='With description' type='success' description='This is a description.' />

			<Alert title='Success alert' type='success' showIcon />
			<Alert title='Info alert' type='info' showIcon />
			<Alert title='Warning alert' type='warning' showIcon />
			<Alert title='Error alert' type='error' showIcon />

			<Alert center title='Success alert' type='success' showIcon />
			<Alert center title='Info alert' type='info' showIcon />
			<Alert center title='Warning alert' type='warning' showIcon />
			<Alert center title='Error alert' type='error' showIcon />

			<Alert title='Success alert' type='success' description='More text description' showIcon />
			<Alert title='Info alert' type='info' description='More text description' showIcon />
			<Alert title='Warning alert' type='warning' description='More text description' showIcon />
			<Alert title='Error alert' type='error' description='More text description' showIcon />
		</div>
	)
}

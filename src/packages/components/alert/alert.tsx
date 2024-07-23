import classNames from 'classnames'
import React from 'react'

interface AlertProps {
	title?: string
	type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'info'
}

const Alert: React.FC<AlertProps> = (props) => {
	const { title, type = 'info' } = props

	const className = classNames('el-alert', {
		[`el-alert--${type}`]: true
	})

	const kids = <span>{title}</span>
	return (
		<div className={className}>
			<div className='el-alert__content'>{kids}</div>
		</div>
	)
}

export default Alert

import {
	CheckCircleOutlined,
	CloseCircleOutlined,
	CloseOutlined,
	InfoCircleOutlined,
	WarningFilled
} from '@ant-design/icons'
import classNames from 'classnames'
import { isFunction } from 'lodash-es'
import React, { useMemo, useState } from 'react'

interface AlertProps {
	title?: string
	type?: 'success' | 'warning' | 'info' | 'error'
	effect?: 'light' | 'dark'
	closable?: boolean
	closeText?: string
	description?: string
	showIcon?: boolean
	center?: boolean
	onClose?: (evt: React.MouseEvent<HTMLSpanElement>) => void
	children?: React.ReactNode
}

const TypeComponentMap = {
	success: <CheckCircleOutlined />,
	warning: <WarningFilled />,
	error: <CloseCircleOutlined />,
	info: <InfoCircleOutlined />
}

const Alert: React.FC<AlertProps> = (props) => {
	const { title, type = 'info', effect = 'light', closable = true, center } = props

	const className = classNames('el-alert', {
		[`el-alert--${type}`]: true,
		[`is-${effect}`]: true,
		'is-center': center
	})

	const [visible, setVisible] = useState<boolean>(true)
	const close = (evt: React.MouseEvent<HTMLSpanElement>) => {
		setVisible(false)
		if (isFunction(props.onClose)) {
			props.onClose(evt)
		}
	}

	const isBigIcon = useMemo(
		() => (props.description || props.children ? 'is-big' : ''),
		[props.description, props.children]
	)

	const closeNode = closable ? (
		props.closeText ? (
			<div className='el-alert__close-btn is-customed' onClick={close}>
				{props.closeText}
			</div>
		) : (
			<CloseOutlined className='el-icon el-alert__close-btn' onClick={close} />
		)
	) : null

	const iconClassName = classNames('el-icon el-alert__icon', isBigIcon)
	const iconComponent = TypeComponentMap[type]
	const iconNode = props.showIcon && iconComponent && (
		<i className={iconClassName}>{iconComponent}</i>
	)

	return (
		<div className={className} style={!visible ? { display: 'none' } : undefined}>
			{iconNode}
			<div className='el-alert__content'>
				<span className={classNames('el-alert__title', { 'with-description': props.description })}>
					{title}
				</span>
				{props.children ||
					(props.description && <p className='el-alert__description'>{props.description}</p>)}
				{closeNode}
			</div>
		</div>
	)
}

export default Alert

import { LoadingOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { isFunction } from 'lodash-es'
import React from 'react'

type Props = {
	type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'info'
	children?: React.ReactNode
	plain?: boolean
	round?: boolean
	circle?: boolean
	disabled?: boolean
	loading?: boolean
	icon?: React.ReactNode
	nativeType?: 'submit' | 'button' | 'reset'
	className?: 'string'
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = (props) => {
	const {
		type = 'default',
		plain = false,
		round = false,
		circle = false,
		disabled = false,
		loading = false,
		nativeType = 'button',
		className: customClassName,
		onClick
	} = props

	const className = classNames(
		'el-button',
		{
			[`el-button--${type}`]: true,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading
		},
		customClassName
	)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (disabled || loading) return
		if (isFunction(onClick)) {
			onClick(event)
		}
	}

	const iconNode =
		props.icon && !loading ? (
			<i className='el-icon'>{props.icon}</i>
		) : loading ? (
			<span className='el-icon is-loading'>
				<LoadingOutlined />
			</span>
		) : null

	const kids = props.children ? <span>{props.children}</span> : null

	return (
		<button className={className} onClick={handleClick} type={nativeType}>
			{iconNode}
			{kids}
		</button>
	)
}

export default Button

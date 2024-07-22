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
	icon?: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: Props) => {
	const {
		type = 'default',
		children = '',
		plain = false,
		round = false,
		circle = false,
		disabled = false,
		icon,
		onClick
	} = props

	const className = classNames('el-button', {
		[`el-button--${type}`]: true,
		'is-plain': plain,
		'is-round': round,
		'is-circle': circle,
		'is-disabled': disabled
	})

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (disabled) return
		if (isFunction(onClick)) {
			onClick(event)
		}
	}

	const iconNode = icon ? <span className='el-icon'>{icon}</span> : null

	return (
		<button className={className} onClick={handleClick}>
			<span>
				{iconNode}
				{children}
			</span>
		</button>
	)
}

export default Button

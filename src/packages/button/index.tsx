import './index.scss'

import classNames from 'classnames'
import React from 'react'

type Props = {
	type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'info'
	children?: React.ReactNode
	plain?: boolean
	round?: boolean
	circle?: boolean
}

export const Button = (props: Props) => {
	const { type = 'default', children = '', plain = false, round = false, circle = false } = props
	console.log(type)

	const className = classNames('h-button', {
		[`h-button--${type}`]: true,
		'is-plain': plain,
		'is-round': round,
		'is-circle': circle
	})

	return <button className={className}>{children}</button>
}

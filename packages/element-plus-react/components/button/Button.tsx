import { NAME_SPACE } from '@element-plus-react/element-plus-react/config'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import { ButtonHTMLType, Buttontype } from './ButtonHelpers'
import './style'

interface ButtonProps {
	type?: Buttontype
	plain?: boolean
	round?: boolean
	circle?: boolean
	disabled?: boolean
	text?: boolean
	bg?: boolean
	icon?: React.ReactNode
	htmlType?: ButtonHTMLType
	children?: React.ReactNode
}

const InternalButton: React.FC<ButtonProps> = (props) => {
	const { type = 'default', htmlType = 'button' } = props

	const buttonType = useMemo(() => type ?? 'default', [type])

	const typeClassName = classNames(`${NAME_SPACE}-button`, {
		[`${NAME_SPACE}-button--${buttonType}`]:
			buttonType !== 'default' && buttonType,
		'is-plain': props.plain,
		'is-round': props.round,
		'is-circle': props.circle,
		'is-disabled': props.disabled,
		'is-text': props.text,
		'is-has-bg': props.bg
	})
	console.log(props.children)

	const children = props.children && <span>{props.children}</span>

	return (
		// eslint-disable-next-line react/button-has-type
		<button className={typeClassName} type={htmlType}>
			{props.icon}
			{children}
		</button>
	)
}

export default InternalButton

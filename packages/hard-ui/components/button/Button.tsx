import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import { Loading } from '@hard-ui/icons'
import classNames from 'classnames'
import { isFunction } from 'radash'
import React, { useMemo } from 'react'
import ButtonGroup from './ButtonGroup'
import { ButtonHTMLType, Buttontype } from './ButtonHelpers'
import './style'

interface ButtonProps {
	type?: Buttontype
	className?: string
	plain?: boolean
	round?: boolean
	circle?: boolean
	disabled?: boolean
	text?: boolean
	bg?: boolean
	icon?: React.ReactNode
	loading?: boolean
	htmlType?: ButtonHTMLType
	onClick?: React.MouseEventHandler<HTMLElement>
	children?: React.ReactNode
}

const InternalButton: React.ForwardRefRenderFunction<HTMLDivElement, Omit<ButtonProps, 'ref'>> = (props) => {
	const { type = 'default', htmlType = 'button' } = props

	const buttonType = useMemo(() => type ?? 'default', [type])

	const className = classNames(
		`${NAME_SPACE}-button`,
		{
			[`${NAME_SPACE}-button--${buttonType}`]: buttonType !== 'default' && buttonType,
			'is-plain': props.plain,
			'is-round': props.round,
			'is-circle': props.circle,
			'is-disabled': props.disabled,
			'is-text': props.text,
			'is-has-bg': props.bg
		},
		props.className
	)

	const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		if (isFunction(props.onClick)) {
			props.onClick(evt)
		}
	}

	const iconNode = props.icon && !props.loading ? props.icon : props.loading ? <Loading /> : null

	const children = props.children && <span>{props.children}</span>

	return (
		// eslint-disable-next-line react/button-has-type
		<button className={className} type={htmlType} onClick={handleClick}>
			{iconNode}
			{children}
		</button>
	)
}

interface CompoundedComponent
	extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLDivElement>> {
	Group: typeof ButtonGroup
}

const Button = React.forwardRef<HTMLDivElement, ButtonProps>(InternalButton) as CompoundedComponent

Button.Group = ButtonGroup

export default Button

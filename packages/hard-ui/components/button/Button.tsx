import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import { Loading } from '@hard-ui/icons'
import classNames from 'classnames'
import { isFunction } from 'radash'
import React, { useContext, useMemo } from 'react'
import ButtonGroup, { ButtonGroupContext } from './ButtonGroup'
import { ButtonHTMLType, ButtonSizeType, Buttontype } from './ButtonHelpers'
import './style'

interface ButtonProps {
	type?: Buttontype
	className?: string
	style?: React.CSSProperties
	plain?: boolean
	round?: boolean
	circle?: boolean
	disabled?: boolean
	text?: boolean
	bg?: boolean
	icon?: React.ReactNode
	loading?: boolean
	size?: ButtonSizeType
	htmlType?: ButtonHTMLType
	onClick?: React.MouseEventHandler<HTMLElement>
	children?: React.ReactNode
}

const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement, Omit<ButtonProps, 'ref'>> = (props, ref) => {
	const { htmlType = 'button' } = props

	const buttonGroupContext = useContext(ButtonGroupContext)

	const buttonType = useMemo(
		() => props.type ?? buttonGroupContext?.type ?? 'default',
		[props.type, buttonGroupContext?.type]
	)
	const buttonSize = useMemo(
		() => props.size ?? buttonGroupContext?.size ?? 'default',
		[props.size, buttonGroupContext?.size]
	)

	const className = classNames(
		`${NAME_SPACE}-button`,
		{
			[`${NAME_SPACE}-button--${buttonType}`]: buttonType !== 'default' && buttonType,
			[`${NAME_SPACE}-button--${buttonSize}`]: buttonSize !== 'default' && buttonSize,
			'is-plain': props.plain,
			'is-round': props.round,
			'is-circle': props.circle,
			'is-disabled': props.disabled,
			'is-text': props.text,
			'is-has-bg': props.bg,
			'is-loading': props.loading
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
		<button ref={ref} className={className} style={props.style} type={htmlType} onClick={handleClick}>
			{iconNode}
			{children}
		</button>
	)
}

interface CompoundedComponent
	extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> {
	Group: typeof ButtonGroup
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(InternalButton) as CompoundedComponent

Button.Group = ButtonGroup

export default Button

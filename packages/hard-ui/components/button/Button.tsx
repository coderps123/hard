import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import { Loading } from '@hard-ui/icons'
import classNames from 'classnames'
import { isFunction } from 'radash'
import React, { useContext, useMemo } from 'react'
import ButtonGroup, { ButtonGroupContext } from './ButtonGroup'
import { ButtonHTMLType, ButtonSizeType, Buttontype } from './ButtonHelpers'
import './style'

import { useStyle } from './style'

export interface ButtonProps {
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
	const { type, disabled = false, circle = false, htmlType = 'button' } = props

	const buttonGroupContext = useContext(ButtonGroupContext)

	const buttonType = useMemo(() => type ?? buttonGroupContext?.type ?? 'default', [type, buttonGroupContext?.type])
	// const buttonSize = useMemo(
	// 	() => props.size ?? buttonGroupContext?.size ?? 'default',
	// 	[props.size, buttonGroupContext?.size]
	// )

	const className = classNames(`${NAME_SPACE}-button`, props.className)

	const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		if (isFunction(props.onClick)) {
			props.onClick(evt)
		}
	}

	const iconNode = props.icon && !props.loading ? props.icon : props.loading ? <Loading /> : null

	const children = props.children && <span>{props.children}</span>

	const { StyledButton } = useStyle(buttonType, disabled, circle)

	return (
		// eslint-disable-next-line react/button-has-type
		<StyledButton ref={ref} style={props.style} className={className} type={htmlType} onClick={handleClick}>
			{iconNode}
			{children}
		</StyledButton>
	)
}

interface CompoundedComponent
	extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> {
	Group: typeof ButtonGroup
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(InternalButton) as CompoundedComponent

Button.Group = ButtonGroup

export default Button

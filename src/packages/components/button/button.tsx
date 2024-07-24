import { LoadingOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { isFunction } from 'lodash-es'
import React, { useContext, useMemo, useRef } from 'react'

import ButtonGroup from './button-group'
import { ButtonGroupContext } from './button-group'

export interface ButtonProps {
	type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'info'
	size?: 'large' | 'default' | 'small'
	text?: boolean // 文字按钮
	bg?: boolean // 文字按钮是否显示背景色
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

const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
	props,
	ref
) => {
	const {
		type,
		text,
		plain,
		round,
		circle,
		disabled,
		loading,
		nativeType = 'button',
		bg,
		onClick
	} = props

	const buttonGroupContext = useContext(ButtonGroupContext)
	const buttonSize = useMemo(
		() => props.size ?? buttonGroupContext?.size,
		[props.size, buttonGroupContext.size]
	)
	const buttonType = useMemo(
		() => type ?? buttonGroupContext?.type ?? 'default',
		[type, buttonGroupContext.type]
	)

	const className = classNames(
		'el-button',
		{
			[`el-button--${buttonType}`]: true,
			[`el-button--${buttonSize}`]: buttonSize,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading,
			'is-text': text,
			'is-has-bg': bg
		},
		props.className
	)

	const buttonRef = ref || useRef<HTMLButtonElement>(null)

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
		<button className={className} onClick={handleClick} type={nativeType} ref={buttonRef}>
			{iconNode}
			{kids}
		</button>
	)
}

interface CompoundedComponent
	extends React.ForwardRefExoticComponent<
		Omit<ButtonProps, 'ref'> & React.RefAttributes<HTMLButtonElement>
	> {
	Group: typeof ButtonGroup
}

const Button = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'ref'>>(
	InternalButton
) as CompoundedComponent

Button.Group = ButtonGroup

export default Button as CompoundedComponent

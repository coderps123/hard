import { Loading } from '@hard-ui/icons'
import { isFunction } from 'radash'
import React, { PropsWithChildren, useContext } from 'react'
import { ConfigContext } from '../config-provider'
import { ButtonHTMLType, ButtonSizeType, Buttontype } from './ButtonHelpers'
import { useClassNames } from './hooks'
import './style'

export interface ButtonProps extends PropsWithChildren {
	className?: string | string[]
	style?: React.CSSProperties
	type?: Buttontype
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
}

const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement, Omit<ButtonProps, 'ref'>> = (props, ref) => {
	// props
	const { htmlType = 'button', className, style, type, size, plain, round, circle, disabled, text, bg, loading } = props

	// Context
	const { getPrefixCls } = useContext(ConfigContext)

	// classNames
	const { wrapCls } = useClassNames({ className, type, size, plain, round, circle, disabled, text, bg, loading, getPrefixCls })

	const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		if (isFunction(props.onClick)) {
			props.onClick(evt)
		}
	}

	const iconNode = props.icon && !props.loading ? props.icon : props.loading ? <Loading /> : null

	const children = props.children && <span>{props.children}</span>

	return (
		// eslint-disable-next-line react/button-has-type
		<button ref={ref} className={wrapCls} style={style} type={htmlType} onClick={handleClick}>
			{iconNode}
			{children}
		</button>
	)
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(InternalButton)

export default Button

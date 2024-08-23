import { CircleClose, Error, Info, Success, Warning, WarnSlight } from '@hard-ui/icons'
import { isFunction } from 'radash'
import React, { useContext, useMemo, useState } from 'react'
import { ConfigContext } from '../config-provider'
import { useClassNames } from './hooks'
import './style'

export type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'error'

export interface AlertProps extends React.PropsWithChildren {
	className?: string | string[]
	style?: React.CSSProperties
	title?: string
	type?: AlertType
	effect?: 'light' | 'dark'
	closable?: boolean
	closeText?: string
	description?: string
	showIcon?: boolean
	center?: boolean
	onClose?: (evt: React.MouseEvent<HTMLSpanElement>) => void
}

const TypeComponentMap = {
	primary: <WarnSlight />,
	success: <Success />,
	warning: <Warning />,
	error: <Error />,
	info: <Info />
}

const InternalAlert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
	// Context
	const { getPrefixCls, prefix } = useContext(ConfigContext)

	// props
	const { title, type = 'primary', effect = 'light', closable = true, className, center, description, children, style } = props

	// classname
	const { wrapCls, contentCls, titleCls, descriptionCls, iconCls, closeTextCls, closeBtnCls } = useClassNames({
		className,
		type,
		effect,
		center,
		description,
		children,
		getPrefixCls,
		prefix
	})

	// visible
	const [visible, setVisible] = useState<boolean>(true)
	const close = (evt: React.MouseEvent<HTMLSpanElement>) => {
		setVisible(false)
		if (isFunction(props.onClose)) {
			props.onClose(evt)
		}
	}

	// style
	const wrapStyle = useMemo(() => (!visible ? { display: 'none', ...style } : style), [visible, style])

	// CloseNode
	const closeNode = closable ? (
		props.closeText ? (
			<div className={closeTextCls} onClick={close}>
				{props.closeText}
			</div>
		) : (
			<CircleClose className={closeBtnCls} onClick={close} />
		)
	) : null

	// IconNode
	const iconComponent = TypeComponentMap[type]
	const iconNode = props.showIcon && iconComponent && <i className={iconCls}>{iconComponent}</i>

	return (
		<div className={wrapCls} style={wrapStyle} ref={ref}>
			{iconNode}
			<div className={contentCls}>
				<span className={titleCls}>{title}</span>
				{props.children || (props.description && <p className={descriptionCls}>{props.description}</p>)}
				{closeNode}
			</div>
		</div>
	)
}

const Alert: React.ForwardRefExoticComponent<Omit<AlertProps, 'ref'> & React.RefAttributes<HTMLDivElement>> = React.forwardRef<HTMLDivElement, AlertProps>(InternalAlert)

export default Alert

import { Plus } from '@hard-ui/icons'
import { isFunction } from 'radash'
import React, { useMemo, useState } from 'react'
import { useClassNames } from './hooks'
import './style'

type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'error'

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
	primary: <Plus />,
	success: <Plus />,
	warning: <Plus />,
	error: <Plus />,
	info: <Plus />
}

const InternalAlert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
	const { title, type = 'primary', effect = 'light', closable = true, style } = props

	const { wrapCls, contentCls, titleCls, descriptionCls, iconCls, closeTextCls, closeBtnCls } = useClassNames({
		...props,
		effect
	})

	const [visible, setVisible] = useState<boolean>(true)
	const close = (evt: React.MouseEvent<HTMLSpanElement>) => {
		setVisible(false)
		if (isFunction(props.onClose)) {
			props.onClose(evt)
		}
	}

	const wrapStyle = useMemo(() => (!visible ? { display: 'none', ...style } : style), [visible, style])

	const closeNode = closable ? (
		props.closeText ? (
			<div className={closeTextCls} onClick={close}>
				{props.closeText}
			</div>
		) : (
			<Plus className={closeBtnCls} onClick={close} />
		)
	) : null

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

const Alert: React.ForwardRefExoticComponent<Omit<AlertProps, 'ref'> & React.RefAttributes<HTMLDivElement>> =
	React.forwardRef<HTMLDivElement, AlertProps>(InternalAlert)

export default Alert

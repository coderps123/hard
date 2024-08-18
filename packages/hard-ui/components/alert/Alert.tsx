import { Plus } from '@hard-ui/icons'
import classNames from 'classnames'
import { isFunction } from 'radash'
import './style'
import React, { useMemo, useState } from 'react'
import { NAME_SPACE } from '@hard-ui/hard-ui/config'

type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'error'

export interface AlertProps {
	title?: string
	type?: AlertType
	effect?: 'light' | 'dark'
	closable?: boolean
	closeText?: string
	description?: string
	showIcon?: boolean
	center?: boolean
	onClose?: (evt: React.MouseEvent<HTMLSpanElement>) => void
	children?: React.ReactNode
}

const TypeComponentMap = {
	primary: <Plus />,
	success: <Plus />,
	warning: <Plus />,
	error: <Plus />,
	info: <Plus />
}

const InternalAlert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
	const { title, type = 'primary', effect = 'light', closable = true, center } = props

	const className = classNames(`${NAME_SPACE}-alert`, {
		[`${NAME_SPACE}-alert--${type}`]: true,
		[`is-${effect}`]: true,
		'is-center': center
	})

	const [visible, setVisible] = useState<boolean>(true)
	const close = (evt: React.MouseEvent<HTMLSpanElement>) => {
		setVisible(false)
		if (isFunction(props.onClose)) {
			props.onClose(evt)
		}
	}

	const isBigIcon = useMemo(
		() => (props.description || props.children ? 'is-big' : ''),
		[props.description, props.children]
	)

	const closeNode = closable ? (
		props.closeText ? (
			<div className={`${NAME_SPACE}-alert__close-btn is-customed`} onClick={close}>
				{props.closeText}
			</div>
		) : (
			<Plus className={`${NAME_SPACE}-icon ${NAME_SPACE}-alert__close-btn`} onClick={close} />
		)
	) : null

	const iconClassName = classNames(`${NAME_SPACE}-icon ${NAME_SPACE}-alert__icon`, isBigIcon)
	const iconComponent = TypeComponentMap[type]
	const iconNode = props.showIcon && iconComponent && <i className={iconClassName}>{iconComponent}</i>

	return (
		<div className={className} style={!visible ? { display: 'none' } : undefined} ref={ref}>
			{iconNode}
			<div className={`${NAME_SPACE}-alert__content`}>
				<span className={classNames(`${NAME_SPACE}-alert__title`, { 'with-description': props.description })}>
					{title}
				</span>
				{props.children ||
					(props.description && <p className={`${NAME_SPACE}-alert__description`}>{props.description}</p>)}
				{closeNode}
			</div>
		</div>
	)
}

const Alert: React.ForwardRefExoticComponent<Omit<AlertProps, 'ref'> & React.RefAttributes<HTMLDivElement>> =
	React.forwardRef<HTMLDivElement, AlertProps>(InternalAlert)

export default Alert

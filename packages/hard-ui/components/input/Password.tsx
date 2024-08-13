import React, { useEffect, useState } from 'react'

import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import { isFunction, omit } from 'radash'
import Input, { InputProps } from './Input'
import { Hide, View } from '@hard-ui/icons'

interface VisibilityToggle {
	visible?: boolean
	onVisibleChange?: (visible: boolean) => void
}

const defaultIconRender = (visible: boolean): React.ReactNode => (visible ? <View /> : <Hide />)

export interface PasswordProps extends InputProps {
	/**
	 * 是否显示切换图标
	 */
	visibilityToggle?: boolean | VisibilityToggle
	iconRender?: (visible: boolean) => React.ReactNode
}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>((props, ref) => {
	const { disabled, visibilityToggle = true, iconRender = defaultIconRender } = props

	const visibilityContronlled = typeof visibilityToggle === 'object' && visibilityToggle.visible !== undefined
	const [visible, setVisible] = useState(() => (visibilityContronlled ? visibilityToggle.visible! : false))

	useEffect(() => {
		if (visibilityContronlled) {
			if (isFunction(visibilityToggle.onVisibleChange)) {
				visibilityToggle.onVisibleChange(visible)
			}
		}
	}, [visible])

	const getIcon = () => {
		const icon = iconRender(visible)
		const iconProps = {
			onClick: () => {
				if (disabled) return
				setVisible(!visible)
			}
		}
		return React.cloneElement(React.isValidElement(icon) ? icon : <span>{icon}</span>, iconProps)
	}

	const suffixIcon = getIcon()

	const className = classNames(`${NAME_SPACE}-input-password`, props.className)
	const omitedProps: InputProps = {
		...omit(props, ['visibilityToggle']),
		type: visible ? 'text' : 'password',
		className,
		suffix: suffixIcon
	}

	return <Input {...omitedProps} ref={ref} />
})

export default Password

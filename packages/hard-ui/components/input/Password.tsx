import React, { useState } from 'react'

import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import { Hide, View } from '@hard-ui/icons'
import classNames from 'classnames'
import { omit } from 'radash'
import Input, { InputProps } from './Input'

interface VisibilityToggle {
	visible?: boolean
	onVisibilityChange?: (visible: boolean) => void
}

type IconStateToggle = 'view' | 'hide'

const defaultIconRender = (iconStateToggle: IconStateToggle) => (iconStateToggle === 'view' ? View : Hide)

export interface PasswordProps extends InputProps {
	/**
	 * 是否显示切换图标
	 */
	visibilityToggle?: boolean | VisibilityToggle
	iconRender: (iconStateToggle: IconStateToggle) => React.ReactNode
}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>((props, ref) => {
	// const { visibilityToggle = true, iconRender =  } = props
	const { visibilityToggle = true, iconRender = defaultIconRender } = props

	const visibilityContronlled = typeof visibilityToggle === 'object' && visibilityToggle.visible !== undefined
	const [visible] = useState(() => (visibilityContronlled ? visibilityToggle.visible : visibilityToggle))

	// 切换图标的状态
	const [iconStateToggle] = useState<IconStateToggle>('hide')

	console.log(visible, visibilityContronlled)

	const SuffixIcon = visible ? () => iconRender(iconStateToggle) : null

	console.log(SuffixIcon)

	const className = classNames(`${NAME_SPACE}-input-password`, props.className)
	const omitProps: InputProps = {
		...omit<PasswordProps, 'visibilityToggle'>(props, ['visibilityToggle']),
		type: 'password',
		className
		// suffix: SuffixIcon
	}

	return <Input {...omitProps} ref={ref} />
})

export default Password

import cs from 'classnames'
import React, { PropsWithChildren, useContext } from 'react'
import { ConfigContext } from '../config-provider'
import { useWatermark } from './hooks'

export interface WatermarkProps extends Required<PropsWithChildren> {
	className?: string
	style?: React.CSSProperties
	zIndex?: string | number
	width?: number
	height?: number
	rotate?: number
	image?: string
	content?: string | string[]
	fontStyle?: {
		color?: string
		fontFamily?: string
		fontSize?: number | string
		fontWeight?: number | string
	}
	gap?: [number, number]
	offset?: [number, number]
	getContainer?: () => HTMLElement
}

const Watermark = React.forwardRef<HTMLDivElement, WatermarkProps>((props, ref) => {
	// props
	const { className, style, children, zIndex, width, height, rotate, image, content, fontStyle, gap, offset, getContainer } = props
	console.log(props)

	// Context
	const { prefix } = useContext(ConfigContext)

	// classname
	const wrapCls = cs(`${prefix}-watermark`, className)

	// hooks
	const { generatorWaterMark } = useWatermark({ zIndex, width, height, rotate, image, content, fontStyle, gap, offset, getContainer })
	console.log(generatorWaterMark)

	return (
		<div className={wrapCls} style={style} ref={ref}>
			{children}
		</div>
	)
})

export default Watermark

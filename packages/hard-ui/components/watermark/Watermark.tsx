import cs from 'classnames'
import React, { PropsWithChildren, useContext, useEffect, useRef } from 'react'
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
}

const Watermark: React.FC<WatermarkProps> = (props) => {
	// props
	const { className, style, children, zIndex, width, height, rotate, image, content, fontStyle, gap, offset } = props
	console.log(props)

	// Context
	const { prefix } = useContext(ConfigContext)

	// classname
	const wrapCls = cs(`${prefix}-watermark`, className)

	// style
	const mergedStyle: React.CSSProperties = {
		position: 'relative',
		...style
	}

	// hooks
	const { appendWatermark } = useWatermark({ zIndex, width, height, rotate, image, content, fontStyle, gap, offset })

	// ref
	const wrapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		appendWatermark(wrapRef)
	}, [])

	return (
		<div className={wrapCls} style={mergedStyle} ref={wrapRef}>
			{children}
		</div>
	)
}

export default Watermark

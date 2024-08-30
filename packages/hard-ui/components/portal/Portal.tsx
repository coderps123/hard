import cs from 'classnames'
import React, { PropsWithChildren, useEffect, useImperativeHandle, useMemo } from 'react'
import { createPortal } from 'react-dom'

export const getAttach = (attach: PortalProps['attach']) => {
	if (typeof attach === 'string') {
		return document.querySelector(attach)
	} else if (typeof attach === 'object' && attach instanceof window.HTMLElement) {
		return attach
	}
	return document.body
}

export interface PortalProps extends PropsWithChildren {
	className?: string
	// 要挂载到的 dom 节点
	attach?: HTMLElement | string
}

const Portal = React.forwardRef((props: PortalProps, ref) => {
	// props
	const { attach = document.body, children, className } = props

	// 内容容器
	const container = useMemo(() => {
		const el = document.createElement('div')
		el.className = cs('portal-wrapper', className)
		return el
	}, [])

	// ref
	useImperativeHandle(ref, () => container, [ref, container])

	useEffect(() => {
		const parentElement = getAttach(attach)

		parentElement?.appendChild(container)

		return () => {
			parentElement?.removeChild(container)
		}
	}, [])

	return createPortal(children, container)
})

export default Portal

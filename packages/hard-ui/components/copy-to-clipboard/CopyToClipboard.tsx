import copy from 'copy-to-clipboard'
import { isFunction } from 'radash'
import React from 'react'

type Options = Parameters<typeof copy>[1]

export interface CopyToClipboardProps {
	text: string
	onCopy?: (text: string, state: boolean) => void
	options?: Options
	children: React.ReactElement
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = (props) => {
	// props
	const { text, onCopy = () => {}, options, children } = props

	const onClick = (event: React.MouseEvent<HTMLElement>) => {
		const ele = React.Children.only(children)

		// 复制
		const state = copy(text, options)

		if (isFunction(onCopy)) {
			// 触发复制回调
			onCopy(text, state)
		}

		if (isFunction(ele.props.onClick)) {
			// 调用节点本身的 click 事件
			ele.props.onClick(event)
		}
	}

	return React.cloneElement(children, { onClick })
}

export default CopyToClipboard

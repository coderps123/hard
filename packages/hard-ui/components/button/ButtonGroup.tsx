import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import React from 'react'

interface InternalGroupProps {
	className?: string
	children?: React.ReactNode
}

const InternalGroup: React.ForwardRefRenderFunction<HTMLDivElement, Omit<InternalGroupProps, 'ref'>> = (props, ref) => {
	const className = classNames(`${NAME_SPACE}-button-group`, props.className)
	return (
		<div ref={ref} className={className}>
			{props.children}
		</div>
	)
}

const Group = React.forwardRef<HTMLDivElement, Omit<InternalGroupProps, 'ref'>>(InternalGroup)

export default Group

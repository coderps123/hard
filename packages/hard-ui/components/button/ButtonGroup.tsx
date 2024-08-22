import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import { pick } from 'radash'
import React from 'react'
import { ButtonSizeType, Buttontype } from './ButtonHelpers'

interface InternalGroupProps {
	className?: string
	style?: React.CSSProperties
	size?: ButtonSizeType
	type?: Buttontype
	children?: React.ReactNode
}

export const ButtonGroupContext = React.createContext<Pick<InternalGroupProps, 'type' | 'size'>>({})

const InternalGroup: React.ForwardRefRenderFunction<HTMLDivElement, Omit<InternalGroupProps, 'ref'>> = (props, ref) => {
	const className = classNames(`${NAME_SPACE}-button-group`, props.className)

	const value = pick(props, ['type', 'size'])

	return (
		<ButtonGroupContext.Provider value={value}>
			<div ref={ref} className={className} style={props.style}>
				{props.children}
			</div>
		</ButtonGroupContext.Provider>
	)
}

const Group = React.forwardRef<HTMLDivElement, Omit<InternalGroupProps, 'ref'>>(InternalGroup)

export default Group

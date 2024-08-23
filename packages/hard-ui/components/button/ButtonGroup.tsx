import cs from 'classnames'
import { pick } from 'radash'
import React, { PropsWithChildren, useContext } from 'react'
import { ConfigContext } from '../config-provider'
import { ButtonSizeType, Buttontype } from './ButtonHelpers'

export interface ButtonGroupProps extends PropsWithChildren {
	className?: string | string[]
	style?: React.CSSProperties
	size?: ButtonSizeType
	type?: Buttontype
}

export const ButtonGroupContext = React.createContext<Pick<ButtonGroupProps, 'type' | 'size'>>({})

const InternalGroup: React.ForwardRefRenderFunction<HTMLDivElement, Omit<ButtonGroupProps, 'ref'>> = (props, ref) => {
	// props
	const { className, style, children } = props

	// Context
	const { getPrefixCls } = useContext(ConfigContext)

	// classNames
	const wrapCls = cs(getPrefixCls('button-group'), className)

	const value = pick(props, ['type', 'size'])

	return (
		<ButtonGroupContext.Provider value={value}>
			<div ref={ref} className={wrapCls} style={style}>
				{children}
			</div>
		</ButtonGroupContext.Provider>
	)
}

const Group = React.forwardRef<HTMLDivElement, Omit<ButtonGroupProps, 'ref'>>(InternalGroup)

export default Group

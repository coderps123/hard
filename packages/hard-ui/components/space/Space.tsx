import React, { Fragment, useContext, useMemo } from 'react'
import { ButtonSizeType } from '../button/ButtonHelpers'
import { ConfigContext } from '../config-provider'
import { useClassNames } from './hooks'
import './style'

export type Sizetype = ButtonSizeType | number

export interface SpaceProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
	className?: string
	style?: React.CSSProperties
	direction?: 'vertical' | 'horizontal'
	size?: Sizetype | [Sizetype, Sizetype]
	align?: 'start' | 'end' | 'center' | 'baseline'
	split?: React.ReactNode
	wrap?: boolean
}

const sizeMap: { [key: string]: number } = {
	large: 20,
	default: 15,
	small: 10
}

const getSize = (size: ButtonSizeType | number): number => sizeMap[size + ''] ?? size

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
	// props
	const { children, direction = 'horizontal', size, align = 'start', wrap = true, split = '', className, style, ...rest } = props

	// Context
	const { getPrefixCls, space } = useContext(ConfigContext)

	const spaceSize = useMemo(() => size ?? space.size ?? getSize('default'), [size, space.size])

	// classname
	const { wrapCls, itemCls, splitCls } = useClassNames({ className, direction, wrap, align, getPrefixCls })

	// style
	const wrapStyle = useMemo(() => {
		const [rowGap, columnGap] = Array.isArray(spaceSize) ? spaceSize : [getSize(spaceSize), getSize(spaceSize)]
		return {
			...style,
			rowGap,
			columnGap
		}
	}, [style, spaceSize])

	// Children
	const childrenList = React.Children.toArray(children)
	const childNodes = childrenList.map((child: any, index: number) => {
		const key = (child && child.key) || `${itemCls}-${index}`
		return (
			<Fragment key={key}>
				{index !== 0 && split && <span className={splitCls}>{split}</span>}
				<div className={itemCls}>{child}</div>
			</Fragment>
		)
	})

	return (
		<div ref={ref} className={wrapCls} style={wrapStyle} {...rest}>
			{childNodes}
		</div>
	)
})

export default Space

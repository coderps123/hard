import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import './style'
import React, { Fragment } from 'react'
import { ButtonSizeType } from '../button/ButtonHelpers'

export interface SpaceProps {
	className?: string
	style?: React.CSSProperties
	direction?: 'vertical' | 'horizontal'
	size?: ButtonSizeType | number
	align?: 'start' | 'end' | 'center' | 'baseline'
	split?: React.ReactNode
	children?: React.ReactNode
}

const sizeMap: { [key: string]: number } = {
	large: 20,
	default: 15,
	small: 10
}

const getSize = (size: string | number): string | number => sizeMap[size + ''] ?? size

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
	const { children, direction = 'horizontal', size = getSize('default'), align, split = '' } = props

	const childrenList = React.Children.toArray(children)

	const className = classNames(
		`${NAME_SPACE}-space`,
		{
			[`is-${direction}`]: direction,
			[`is-${align}`]: direction === 'vertical' && !align ? 'start' : align
		},
		props.className
	)

	const getMarginStyle = (index: number) => {
		const isLastOne = childrenList.length === index + 1
		return !isLastOne
			? {
					[direction === 'vertical' ? 'marginBottom' : 'marginRight']: getSize(size)
				}
			: {}
	}

	return (
		<div ref={ref} className={className} style={props.style}>
			{childrenList &&
				childrenList.map((child, index: number) => {
					return (
						<Fragment key={index}>
							{index !== 0 && <span className={`${NAME_SPACE}-space-split`}>{split}</span>}
							<div className={`${NAME_SPACE}-space-item`} style={getMarginStyle(index)}>
								{child}
							</div>
						</Fragment>
					)
				})}
		</div>
	)
})

export default Space

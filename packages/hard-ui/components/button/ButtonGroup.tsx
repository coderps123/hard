import { NAME_SPACE } from '@hard-ui/hard-ui/config'
import classNames from 'classnames'
import { pick } from 'radash'
import React from 'react'
import { ButtonSizeType, Buttontype } from './ButtonHelpers'
import styled from 'styled-components'

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
	console.log(className)

	const value = pick(props, ['type', 'size'])

	const StyledButtonGroup = styled.div.attrs({
		className: 'h-button-group'
	})`
		&.h-button-group {
			display: inline-flex;
			vertical-align: middle;

			& > :first-child {
				border-bottom-right-radius: 0;
				border-top-right-radius: 0;
			}

			& > :last-child {
				border-bottom-left-radius: 0;
				border-top-left-radius: 0;
			}
		}
	`

	return (
		<ButtonGroupContext.Provider value={value}>
			<StyledButtonGroup ref={ref} style={props.style}>
				{props.children}
			</StyledButtonGroup>
		</ButtonGroupContext.Provider>
	)
}

const Group = React.forwardRef<HTMLDivElement, Omit<InternalGroupProps, 'ref'>>(InternalGroup)

export default Group

import classNames from 'classnames'
import { omit } from 'radash'
import React from 'react'
import { NAME_SPACE } from '../../config'
import IconBase, { IconProps } from '../components/IconBase'
import '../index.css'

const Svg = (props: IconProps) => {
	return (
		<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
			<path d='M512 32C246.912 32 32 246.912 32 512c0 265.088 214.912 480 480 480 265.088 0 480-214.912 480-480 0-265.088-214.912-480-480-480z m0 896C282.24 928 96 741.76 96 512S282.24 96 512 96s416 186.24 416 416-186.24 416-416 416z'></path>
			<path d='M512 384a32 32 0 0 0-32 32v352a32 32 0 0 0 64 0V416a32 32 0 0 0-32-32z'></path>
			<path d='M512 272m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z'></path>
		</svg>
	)
}

const InternalSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<IconProps, 'ref'>> = (props, ref) => {
	const className = classNames(props.className, `${NAME_SPACE}-icon-warn-slight`)
	return <IconBase icon={Svg} {...omit(props, ['className'])} className={className} ref={ref} />
}

const WarnSlight: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = React.forwardRef(InternalSvg)

export default WarnSlight

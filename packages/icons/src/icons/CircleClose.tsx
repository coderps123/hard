import classNames from 'classnames'
import { omit } from 'radash'
import React from 'react'
import { NAME_SPACE } from '../../config'
import IconBase, { IconProps } from '../components/IconBase'
import '../index.css'

const Svg = (props: IconProps) => {
	return (
		<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
			<path d='M467.008 512L376 421.952a33.408 33.408 0 0 1-8.96-22.976 30.72 30.72 0 0 1 9.472-22.464 30.72 30.72 0 0 1 22.464-9.536c8.704 0 16.384 3.008 23.04 8.96l90.048 91.072 89.984-91.008a31.168 31.168 0 0 1 31.488-8c11.648 3.264 19.2 10.816 22.528 22.464a31.04 31.04 0 0 1-8 31.488L557.056 512l90.944 89.984c8.704 9.344 11.392 19.84 8.064 31.488a30.848 30.848 0 0 1-22.528 22.464 31.04 31.04 0 0 1-31.488-8L512.064 557.056l-90.048 90.944a33.408 33.408 0 0 1-23.04 9.024 30.72 30.72 0 0 1-22.464-9.536 30.72 30.72 0 0 1-9.536-22.464c0-8.64 3.008-16.32 9.024-23.04L467.008 512zM512 896c108.672-2.688 199.168-40.192 271.488-112.512S893.312 620.672 896 512c-2.688-108.672-40.192-199.168-112.512-271.488S620.672 130.688 512 128c-108.672 2.688-199.168 40.192-271.488 112.512S130.688 403.328 128 512c2.688 108.672 40.192 199.168 112.512 271.488S403.328 893.312 512 896z m0 64c-126.72-3.328-232.192-47.168-316.544-131.52C111.232 744.192 67.392 638.72 64 512c3.328-126.72 47.168-232.192 131.456-316.544C279.872 111.232 385.344 67.392 512 64c126.72 3.328 232.192 47.168 316.48 131.456C912.832 279.872 956.672 385.344 960 512c-3.328 126.72-47.168 232.192-131.52 316.48C744.192 912.832 638.72 956.672 512 960z'></path>
		</svg>
	)
}

const InternalSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<IconProps, 'ref'>> = (props, ref) => {
	const className = classNames(props.className, `${NAME_SPACE}-icon-circle-close`)
	return <IconBase icon={Svg} {...omit(props, ['className'])} className={className} ref={ref} />
}

const CircleClose: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
	React.forwardRef(InternalSvg)

export default CircleClose

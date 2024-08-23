import classNames from 'classnames'
import { omit } from 'radash'
import React from 'react'
import { NAME_SPACE } from '../../config'
import IconBase, { IconProps } from '../components/IconBase'

const Svg = (props: IconProps) => {
	return (
		<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
			<path d='M512 160c161.344 14.72 286.72 73.344 376 176C977.344 438.656 1022.656 497.28 1024 512c-1.344 14.72-46.72 73.344-136 176-89.344 102.656-214.656 161.28-376 176-161.344-14.72-286.72-73.344-376-176C46.656 585.344 1.344 526.72 0 512c1.344-14.72 46.72-73.344 136-176C225.344 233.344 350.656 174.72 512 160z m0 64c-113.344 7.36-207.68 45.504-283.008 114.496C153.664 407.488 102.272 465.344 75.008 512c27.328 46.72 78.656 104.512 153.984 173.504C304.32 754.496 398.656 792.64 512 800c113.344-7.36 207.68-45.504 283.008-114.496 75.328-68.992 126.72-126.848 153.984-173.504-27.264-46.72-78.656-104.512-153.984-173.504C719.68 269.504 625.344 231.36 512 224z m0 64c63.36 1.344 116.16 23.168 158.464 65.536 42.368 42.24 64.192 95.104 65.536 158.464-1.344 63.36-23.168 116.16-65.536 158.464C628.224 712.896 575.36 734.72 512 736c-63.36-1.344-116.16-23.168-158.464-65.536C311.168 628.224 289.28 575.36 288 512c1.344-63.36 23.168-116.16 65.536-158.464C395.776 311.168 448.64 289.28 512 288z m0 64c-45.312 1.344-83.008 17.024-113.024 46.976-29.952 30.08-45.632 67.712-46.976 113.024 1.344 45.312 17.024 83.008 46.976 112.96 30.08 30.08 67.712 45.696 113.024 47.04 45.312-1.344 83.008-17.024 112.96-47.04 30.08-29.952 45.696-67.648 47.04-112.96-1.344-45.312-17.024-83.008-47.04-113.024C595.008 369.024 557.312 353.344 512 352z'></path>
		</svg>
	)
}

const InternalSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<IconProps, 'ref'>> = (props, ref) => {
	const className = classNames(props.className, `${NAME_SPACE}-icon-view`)
	return <IconBase icon={Svg} {...omit(props, ['className'])} className={className} ref={ref} />
}

const View: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = React.forwardRef(InternalSvg)

export default View

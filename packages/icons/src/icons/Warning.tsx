import classNames from 'classnames'
import { omit } from 'radash'
import React from 'react'
import { NAME_SPACE } from '../../config'
import IconBase, { IconProps } from '../components/IconBase'

const Svg = (props: IconProps) => {
	return (
		<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
			<path d='M873.439 960.4 152.591 960.4c-48.34 0-87.174-19.097-106.568-52.405-19.399-33.308-17.039-76.816 6.499-119.331L416.23 131.772C439.905 88.947 475.11 64.4 512.775 64.4c37.67 0 72.84 24.517 96.581 67.304l364.09 657.027c23.532 42.516 25.966 85.992 6.531 119.296C960.614 941.334 921.748 960.4 873.439 960.4L873.439 960.4zM512.812 133.356c-11.976 0-25.693 11.964-36.813 31.998L112.291 822.313c-11.396 20.618-14.063 39.138-7.256 50.821 6.813 11.654 24.155 18.347 47.557 18.347l720.848 0c23.439 0 40.75-6.656 47.558-18.347 6.771-11.653 4.14-30.166-7.287-50.785L549.626 165.354C538.538 145.32 524.751 133.356 512.812 133.356L512.812 133.356zM513.017 649.334c-18.883 0-34.21-15.414-34.21-34.479L478.807 304.545c0-19.033 15.327-34.48 34.21-34.48 18.886 0 34.213 15.447 34.213 34.48l0 310.309C547.229 633.92 531.902 649.334 513.017 649.334zM512.771 817.871c29.441 0 53.309-24.096 53.309-53.819s-23.867-53.819-53.309-53.819-53.308 24.096-53.308 53.819S483.33 817.871 512.771 817.871z'></path>
		</svg>
	)
}

const InternalSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<IconProps, 'ref'>> = (props, ref) => {
	const className = classNames(props.className, `${NAME_SPACE}-icon-warning`)
	return <IconBase icon={Svg} {...omit(props, ['className'])} className={className} ref={ref} />
}

const Warning: React.ForwardRefExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = React.forwardRef(InternalSvg)

export default Warning

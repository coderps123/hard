import React from 'react'
import '../index.css'

interface CustomIconComponentProps {
	className?: string
	width?: number | string
	height?: number | string
	fill?: string
	viewBox?: string
	style?: React.CSSProperties
}

const SearchSvg: React.ForwardRefRenderFunction<HTMLSpanElement, Omit<CustomIconComponentProps, 'ref'>> = (
	props,
	ref
) => {
	return (
		<span ref={ref} className='h-icon h-icon-search'>
			<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' {...props}>
				<path
					fill={props.fill ?? 'currentColor'}
					d='M811.008 766.016l124.928 124.928c6.016 6.656 8.96 14.208 8.96 22.528 0 8.32-3.136 15.616-9.472 22.016a30.08 30.08 0 0 1-21.952 9.472 32.96 32.96 0 0 1-22.528-8.96l-124.992-124.992c-88.64 72.64-186.88 105.792-294.912 99.456-107.968-6.336-201.6-50.496-280.96-132.48-75.968-85.952-112.96-182.976-110.976-290.944 1.984-107.968 42.688-203.264 121.984-285.952 82.688-79.36 177.984-119.936 285.952-121.984 108.032-1.984 204.992 35.008 290.944 110.976 81.984 79.36 126.144 172.992 132.48 280.96 6.4 107.968-26.816 206.272-99.456 294.912z m-315.968 80.96c100.032-2.688 183.04-36.992 248.96-103.04 65.92-65.92 100.288-148.928 103.04-248.896-2.688-99.968-37.056-182.976-103.04-248.96-65.984-65.92-148.992-100.288-248.96-102.976-99.968 2.688-182.976 36.992-248.96 103.04-65.92 65.92-100.288 148.928-102.976 248.96 2.688 99.904 36.992 182.912 103.04 248.896 65.92 65.92 148.928 100.288 248.96 102.976z'
				></path>
			</svg>
		</span>
	)
}

const Search: React.ForwardRefExoticComponent<
	Omit<CustomIconComponentProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, CustomIconComponentProps>(SearchSvg)

export default Search

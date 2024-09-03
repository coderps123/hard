import { WatermarkProps } from '../Watermark'

export interface WatermarkOpions extends Omit<WatermarkProps, 'className' | 'style' | 'children'> {}

const defaultOptions = {
	rotate: -20,
	zIndex: 1,
	width: 120,
	height: 64,
	gap: [100, 100],
	fontStyle: {
		fontSize: '16px',
		color: 'rgba(0, 0, 0, 0.15)',
		fontFamily: 'sans-serif',
		fontWeight: 'normal'
	}
}

const useWaterMark = (params: WatermarkOpions) => {
	console.log(params)
	const mergedOptions = {
		rotate: params.rotate || defaultOptions.rotate,
		zIndex: params.zIndex || defaultOptions.zIndex,
		width: params.width || defaultOptions.width,
		height: params.height || defaultOptions.height,
		gap: Array.isArray(params.gap) ? params.gap : defaultOptions.gap
	}

	const { rotate, width, height, zIndex, gap } = mergedOptions
	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')

	const ratio = window.devicePixelRatio

	const getCanvasConfig = () => {
		const canvasWidth = gap[0] + width
		const canvasHeight = gap[1] + height

		canvas.setAttribute('width', `${canvasWidth * ratio}px`)
		canvas.setAttribute('height', `${canvasHeight * ratio}px`)
		canvas.style.width = `${canvasWidth}px`
		canvas.style.height = `${canvasHeight}px`

		ctx?.translate((canvasWidth * ratio) / 2, (canvasHeight * ratio) / 2)
		ctx?.scale(ratio, ratio)

		ctx?.rotate((rotate * Math.PI) / 180)
	}

	const generateWatermark = () => {
		getCanvasConfig()
		ctx?.fillText('这是水印组件的内容', 0, 0)
		const base64Url = canvas?.toDataURL()

		const style = `
			width:100%;
			height:100%;
			z-index: ${zIndex};
			position:absolute;
			top:0;
			left:0;
			bottom:0;
			right:0;
			pointer-events: none;
			background-position: 0 0;
			background-repeat: repeat;
			background-image:url(${base64Url})`

		const div = document.createElement('div')
		div.setAttribute('style', style)

		return div
	}

	const appendWatermark = (wrapEle: React.RefObject<HTMLDivElement>) => {
		const watermarkDiv = generateWatermark()

		wrapEle.current?.appendChild(watermarkDiv)

		if (wrapEle.current && wrapEle.current.style) {
			wrapEle.current.style.position = 'relative'
		}
	}

	// getCanvensData()

	return {
		appendWatermark
	}
}

export default useWaterMark

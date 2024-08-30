import React, { useEffect } from 'react'

const defaultOptions: MutationObserverInit = {
	subtree: true,
	childList: true,
	attributeFilter: ['style', 'class']
}

const getTarget = (target: React.RefObject<Element> | Element) => {
	let targetElement: Element | null

	if ('current' in target) {
		targetElement = target.current
	} else {
		targetElement = target
	}
	return targetElement
}

export const useMutateObserver = (target: React.RefObject<Element> | Element, callback: MutationCallback, options: MutationObserverInit = defaultOptions) => {
	useEffect(() => {
		const targetElement = getTarget(target)
		if (!targetElement) return

		let instance: MutationObserver | null

		if ('MutationObserver' in window) {
			instance = new MutationObserver(callback)

			instance?.observe(targetElement, options)
		}

		return () => {
			instance?.takeRecords()
			instance?.disconnect()
			instance = null
		}
	}, [options, target])
}

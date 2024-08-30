import React, { useRef } from 'react'
import { useMutateObserver } from './hooks'

export interface MutateObserverProps {
	options?: MutationObserverInit
	onMutate?: (mutations: MutationRecord[], observer: MutationObserver) => void
	children: React.ReactElement
}

const MutateObserver: React.FC<MutateObserverProps> = (props) => {
	const { options, onMutate = () => {}, children } = props

	const elementRef = useRef<HTMLElement>(null)

	useMutateObserver(elementRef!, onMutate, options)

	if (!children) {
		return null
	}

	return React.cloneElement(children, { ref: elementRef })
}

export default MutateObserver

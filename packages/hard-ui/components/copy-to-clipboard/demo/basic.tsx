import { Button, CopyToClipboard } from 'hard-ui'
import React, { useEffect, useRef } from 'react'

const App: React.FC = () => {
	const ref = useRef(null)

	useEffect(() => {
		console.log(ref)
	}, [])

	return (
		<CopyToClipboard
			text={'ps'}
			onCopy={(text, state) => {
				console.log(text, state)
			}}
		>
			<Button
				onClick={() => {
					console.log('点击了按钮')
				}}
			>
				复制
			</Button>
		</CopyToClipboard>
	)
}

export default App

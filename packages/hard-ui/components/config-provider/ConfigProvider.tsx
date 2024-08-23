import React, { PropsWithChildren } from 'react'

interface ConfigProviderProps extends PropsWithChildren {}

const ConfigProvider = (props: ConfigProviderProps) => {
	const { children } = props
	return <div>{children}</div>
}

export default ConfigProvider

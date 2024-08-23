import { NAME_SPACE } from '@hard-ui/icons/config'
import { createContext } from 'react'

export interface ConfigProps {
	prefix: string
	getPrefixCls: (componentName: string, customPrefix?: string) => string
}

const defaultValue: ConfigProps = {
	prefix: NAME_SPACE,
	getPrefixCls: (componentName: string, customPrefix?: string) => `${customPrefix || defaultValue.prefix}-${componentName}`
}

export const ConfigContext = createContext<ConfigProps>(defaultValue)

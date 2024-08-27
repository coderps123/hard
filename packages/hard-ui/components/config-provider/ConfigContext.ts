import { NAME_SPACE } from '@hard-ui/icons/config'
import { createContext } from 'react'
import { Sizetype } from '../space/Space'

export interface ConfigProps {
	// 类名
	prefix: string
	getPrefixCls: (componentName: string, customPrefix?: string) => string
	// space
	space: {
		size?: Sizetype
	}
}

const defaultValue: ConfigProps = {
	prefix: NAME_SPACE,
	getPrefixCls: (componentName: string, customPrefix?: string) => `${customPrefix || defaultValue.prefix}-${componentName}`,
	space: {
		size: 'default'
	}
}

export const ConfigContext = createContext<ConfigProps>(defaultValue)

import { createContext } from 'react'

import enUS from './locale/en-US'
import { CalendarLocaleType } from './locale/interface'
import zhCN from './locale/zh-CN'

export interface LocaleContextType {
	locale: string
}

const LocaleContext = createContext<LocaleContextType>({
	locale: 'zh-CN'
})

export default LocaleContext

export const localeMap: { [prop: string]: CalendarLocaleType } = {
	'zh-CN': zhCN,
	'en-US': enUS
}

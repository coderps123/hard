import { NAME_SPACE } from '@hard-ui/icons/config'
import { useControllableValue } from 'ahooks'
import cs from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import CalendarBody from './CalendarBody'
import CalendarHeader from './CalendarHeader'
import LocaleContext from './LocaleContext'

export interface CalendarProps {
	value?: Dayjs
	defaultValue?: Dayjs
	style?: React.CSSProperties
	className?: string | string[]
	// 自定义渲染日期单元格，返回内容会被追加到单元格
	dateCellRender?: (date: Dayjs) => React.ReactNode
	// 自定义渲染日期单元格，返回内容覆盖单元格
	dateFullCellRender?: (date: Dayjs) => React.ReactNode
	// 国际化
	locale?: string
	onChange?: (date: Dayjs) => void
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
	const { className, style, locale } = props
	const wrapCls = cs(`${NAME_SPACE}-calendar`, className)

	const [currentDate, setCurrentDate] = useControllableValue(props, {
		defaultValue: dayjs()
	})

	const selectHandle = (date: Dayjs) => {
		setCurrentDate(date)
	}

	return (
		<LocaleContext.Provider
			value={{
				locale: locale || navigator.language
			}}
		>
			<div className={wrapCls} style={style} ref={ref}>
				<CalendarHeader value={currentDate} selectHandle={selectHandle}></CalendarHeader>
				<CalendarBody {...props} value={currentDate} selectHandle={selectHandle}></CalendarBody>
			</div>
		</LocaleContext.Provider>
	)
})

export default Calendar

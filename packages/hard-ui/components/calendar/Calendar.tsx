import { NAME_SPACE } from '@hard-ui/icons/config'
import cs from 'classnames'
import React, { useState } from 'react'
import './style'

const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

// 获取某个月内一共有多少天
const getDaysOfMonth = (year: number, month: number): number => {
	return new Date(year, month + 1, 0).getDate()
}

const firstDaysOfMonth = (year: number, month: number): number => {
	return new Date(year, month, 1).getDay()
}

interface CalendarProps {
	defaultValue?: Date
	onChange?: (date: Date) => void
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
	const { defaultValue = new Date(), onChange } = props
	const [date, setDate] = useState(defaultValue)

	const warpCls = cs(`${NAME_SPACE}-calendar`)

	const handlePrevMonth = () => {
		const curDate = new Date(date.getFullYear(), date.getMonth() - 1, 1)
		setDate(curDate)
		onChange?.(curDate)
	}
	const handleNextMonth = () => {
		const curDate = new Date(date.getFullYear(), date.getMonth() + 1, 1)
		setDate(curDate)
		onChange?.(curDate)
	}

	const dateClickHandle = (day: number) => {
		const curDate = new Date(date.getFullYear(), date.getMonth(), day)
		setDate(curDate)
		onChange?.(curDate)
	}

	const renderDates = () => {
		const days: React.ReactNode[] = []
		const daysCount = getDaysOfMonth(date.getFullYear(), date.getMonth())
		const firstDay = firstDaysOfMonth(date.getFullYear(), date.getMonth())

		for (let i = 0; i < firstDay; i++) {
			days.push(<div key={`prev-${i}`} className={cs(`${NAME_SPACE}-calendar-tbody-item`, 'is-prev')}></div>)
		}

		for (let i = 1; i <= daysCount; i++) {
			days.push(
				<div
					key={i}
					className={cs(`${NAME_SPACE}-calendar-tbody-item`, 'is-current', { [`is-select`]: i === date.getDate() })}
					onClick={() => dateClickHandle(i)}
				>
					{i}
				</div>
			)
		}

		return days
	}
	return (
		<div ref={ref} className={warpCls}>
			<div className={cs(`${NAME_SPACE}-calendar__header`)}>
				<button type='button' onClick={handlePrevMonth}>
					&lt;
				</button>
				<div>
					{date.getFullYear()} 年 {monthNames[date.getMonth()]}
				</div>
				<button type='button' onClick={handleNextMonth}>
					&gt;
				</button>
			</div>
			<div className={cs(`${NAME_SPACE}-calendar__body`)}>
				<div className={cs(`${NAME_SPACE}-calendar-table`)}>
					<div className={cs(`${NAME_SPACE}-calendar-thead`)}>
						<div className={cs(`${NAME_SPACE}-calendar-thead-item`)}>周日</div>
						<div className={cs(`${NAME_SPACE}-calendar-thead-item`)}>周一</div>
						<div className={cs(`${NAME_SPACE}-calendar-thead-item`)}>周二</div>
						<div className={cs(`${NAME_SPACE}-calendar-thead-item`)}>周三</div>
						<div className={cs(`${NAME_SPACE}-calendar-thead-item`)}>周四</div>
						<div className={cs(`${NAME_SPACE}-calendar-thead-item`)}>周五</div>
						<div className={cs(`${NAME_SPACE}-calendar-thead-item`)}>周六</div>
					</div>
					<div className={cs(`${NAME_SPACE}-calendar-tbody`)}>{renderDates()}</div>
				</div>
			</div>
		</div>
	)
})

export default Calendar

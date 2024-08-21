import { NAME_SPACE } from '@hard-ui/icons/config'
import cs from 'classnames'
import { Dayjs } from 'dayjs'
import React from 'react'
import { CalendarProps } from './Calendar'
import './style'

interface MonthCalendarProps extends CalendarProps {
	defaultValue?: Date
	onChange?: (date: Date) => void
}

const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

type DaysInfo = { date: Dayjs; state: 'prev' | 'current' | 'next' }

const getAllDays = (date: Dayjs) => {
	const daysInMonth = date.daysInMonth()
	const startDate = date.startOf('month')
	const day = startDate.day()
	const daysInfo: Array<DaysInfo> = new Array(6 * 7)

	for (let i = 0; i < day; i++) {
		daysInfo[i] = {
			date: startDate.subtract(day - i, 'day'),
			state: 'prev'
		}
	}

	for (let i = day; i < daysInfo.length; i++) {
		daysInfo[i] = {
			date: startDate.add(i - day, 'day'),
			state: daysInMonth > i - day ? 'current' : 'next'
		}
	}

	return daysInfo
}

const renderDates = (days: Array<DaysInfo>, value: Dayjs) => {
	// const clickHandle = (currentValue: number) => {
	// 	console.log(currentValue)
	// }
	const itemCls = (day: DaysInfo) =>
		cs(`${NAME_SPACE}-calendar-col`, `is-${day.state}`, { [`is-select`]: day.date.date() === value.date() })

	const rows: Array<React.ReactNode[]> = []
	for (let i = 0; i < 6; i++) {
		rows[i] = []
		for (let j = 0; j < 7; j++) {
			const day = days[i * 7 + j]
			rows[i].push(
				<td key={day.date.format('YYYY-MM-DD')} className={itemCls(day)}>
					<div className={cs(`${NAME_SPACE}-calendar-day`)}>{day.date.date()}</div>
				</td>
			)
		}
	}

	return rows.map((row, index) => (
		<tr key={index} className={cs(`${NAME_SPACE}-calendar-row`)}>
			{row}
		</tr>
	))

	// return days.map((day) => (
	// 	<div key={day.date.format('YYYY-MM-DD')} className={itemCls(day)} onClick={() => clickHandle(day.date.date())}>
	// 		{day.date.date()}
	// 	</div>
	// ))
}

const MonthCalendar = React.forwardRef<HTMLDivElement, MonthCalendarProps>((props, ref) => {
	const allDays = getAllDays(props.value)
	return (
		<div className={cs(`${NAME_SPACE}-calendar__body`)} ref={ref}>
			<table className={cs(`${NAME_SPACE}-calendar-table`)} cellSpacing='0' cellPadding='0'>
				<thead className={cs(`${NAME_SPACE}-calendar-thead`)}>
					<tr>
						{weekList.map((week) => (
							<th key={week} className={cs(`${NAME_SPACE}-calendar-thead-item`)}>
								{week}
							</th>
						))}
					</tr>
				</thead>
				<tbody className={cs(`${NAME_SPACE}-calendar-tbody`)}>{renderDates(allDays, props.value)}</tbody>
			</table>
		</div>
	)
})

export default MonthCalendar

import { NAME_SPACE } from '@hard-ui/icons/config'
import cs from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React, { useContext } from 'react'
import { CalendarProps } from './Calendar'
import LocaleContext, { localeMap } from './LocaleContext'
import './style'

interface CalendarBodyProps extends CalendarProps {
	selectHandle: (date: Dayjs) => void
}

const weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

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

const CalendarBody = (props: CalendarBodyProps) => {
	const { value = dayjs(), dateCellRender, dateFullCellRender, selectHandle } = props

	const localeContext = useContext(LocaleContext)
	const CalendarLocale = localeMap[localeContext.locale]

	const allDays = getAllDays(value)

	const renderDates = (days: Array<DaysInfo>) => {
		const itemCls = (day: DaysInfo) =>
			cs(`${NAME_SPACE}-calendar-col`, `is-${day.state}`, {
				[`is-select`]: day.date.format('YYYY-MM-DD') === value.format('YYYY-MM-DD')
			})

		const rows: Array<React.ReactNode[]> = []
		for (let i = 0; i < 6; i++) {
			rows[i] = []
			for (let j = 0; j < 7; j++) {
				const day = days[i * 7 + j]
				rows[i].push(
					<td key={day.date.format('YYYY-MM-DD')} className={itemCls(day)} onClick={() => selectHandle(day.date)}>
						<div className={cs(`${NAME_SPACE}-calendar-date`)}>
							{dateFullCellRender ? (
								dateFullCellRender(day.date)
							) : (
								<>
									<div className={cs(`${NAME_SPACE}-calendar-date-value`)}>{day.date.date()}</div>
									<div className={cs(`${NAME_SPACE}-calendar-date-content`)}>
										{dateCellRender && dateCellRender(day.date)}
									</div>
								</>
							)}
						</div>
					</td>
				)
			}
		}

		return rows.map((row, index) => (
			<tr key={index} className={cs(`${NAME_SPACE}-calendar-row`)}>
				{row}
			</tr>
		))
	}

	return (
		<div className={cs(`${NAME_SPACE}-calendar__body`)}>
			<table className={cs(`${NAME_SPACE}-calendar-table`)} cellSpacing='0' cellPadding='0'>
				<thead className={cs(`${NAME_SPACE}-calendar-thead`)}>
					<tr>
						{weekList.map((week) => (
							<th key={week} className={cs(`${NAME_SPACE}-calendar-thead-item`)}>
								{CalendarLocale.week[week]}
							</th>
						))}
					</tr>
				</thead>
				<tbody className={cs(`${NAME_SPACE}-calendar-tbody`)}>{renderDates(allDays)}</tbody>
			</table>
		</div>
	)
}

export default CalendarBody

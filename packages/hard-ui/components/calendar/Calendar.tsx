import { NAME_SPACE } from '@hard-ui/icons/config'
import cs from 'classnames'
import { Dayjs } from 'dayjs'
import React from 'react'
import MonthCalendar from './MonthCalendar'

export interface CalendarProps {
	value: Dayjs
}

const Calendar = React.forwardRef((props: CalendarProps) => {
	return (
		<div className={cs(`${NAME_SPACE}-calendar`)}>
			<MonthCalendar {...props}></MonthCalendar>
		</div>
	)
})

export default Calendar

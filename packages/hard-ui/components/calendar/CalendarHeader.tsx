import { NAME_SPACE } from '@hard-ui/icons/config'
import cs from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React, { useContext } from 'react'
import Button from '../button'
import LocaleContext, { localeMap } from './LocaleContext'

interface CalendarHeaderProps {
	value: Dayjs
	selectHandle: (date: Dayjs) => void
}

const CalendarHeader = (props: CalendarHeaderProps) => {
	const { value, selectHandle } = props

	const localeContext = useContext(LocaleContext)
	const CalendarLocale = localeMap[localeContext.locale]

	const prevDateHandle = () => {
		selectHandle(value.subtract(1, 'month'))
	}
	const todayDateHandle = () => {
		selectHandle(dayjs())
	}
	const nextDateHandle = () => {
		selectHandle(value.add(1, 'month'))
	}

	return (
		<div className={cs(`${NAME_SPACE}-calendar__header`)}>
			<div className={cs(`${NAME_SPACE}-calendar__header-date`)}>{value.format(CalendarLocale.formatMonth)}</div>
			<Button.Group className={cs(`${NAME_SPACE}-calendar__header-button-wrap`)} size='small'>
				<Button onClick={prevDateHandle}>{CalendarLocale.prevMonth}</Button>
				<Button onClick={todayDateHandle}>{CalendarLocale.today}</Button>
				<Button onClick={nextDateHandle}>{CalendarLocale.nextMonth}</Button>
			</Button.Group>
		</div>
	)
}

export default CalendarHeader

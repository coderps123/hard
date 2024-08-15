import '@hard-ui/theme-chalk/src/base.scss'
import '@hard-ui/theme-chalk/src/button-group.scss'
import '@hard-ui/theme-chalk/src/button.scss'
import './index.scss'

import styled from 'styled-components'
import { Buttontype } from '../ButtonHelpers'

export const useStyle = (type: Buttontype, disabled: boolean) => {
	let commonButtonStyle = styled.button`
		--h-button-border-radius: 2px;
		--h-button-size-large: 40px;
		--h-button-size: 32px;
		--h-button-font-size-large: 18px;
		--h-button-font-size: 14px;
		--h-button-font-size-small: 12px;
		--h-button-padding-vertical: 6px;
		--h-button-padding-horizontal: 12px;

		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--h-button-border-radius);
		height: var(--h-button-size);
		line-height: 1px;
		padding: var(--h-button-padding-vertical) var(--h-button-padding-horizontal);
		font-size: var(--h-button-font-size);
		cursor: pointer;
		user-select: none;
		border: none;
		box-sizing: border-box;
	`

	const getButtonStyle = () => {
		const map = {
			primary: styled(commonButtonStyle)`
				color: var(--h-color-white);
				background-color: var(--h-color-primary);
				box-shadow: 0 0 0 1px var(--h-color-primary-light-3);

				&:hover {
					background-color: var(--h-color-primary-light-3);
				}
			`,
			default: styled(commonButtonStyle)`
				color: var(--h-color-blank);
				background-color: var(--h-color-white);
				box-shadow: 0 0 0 1px #d9d9d9;

				&:hover {
					color: var(--h-color-primary);
					box-shadow: 0 0 0 1px var(--h-color-primary-light-3);
				}

				${disabled &&
				styled(commonButtonStyle)`
					color: var(--h-color-blank);
					background-color: var(--h-disabled-bg-color);
					box-shadow: 0 0 0 1px var(--h-disabled-border-color);

					cursor: not-allowed;
				`}
			`,
			dashed: styled(commonButtonStyle)`
				color: var(--h-color-blank);
				background-color: var(--h-color-white);
				border-style: dashed;
				border-width: 1px;

				&:hover {
					color: var(--h-color-primary);
					border-color: var(--h-color-primary);
				}
			`,
			text: styled(commonButtonStyle)`
				color: var(--h-color-blank);
				background-color: var(--h-color-white);

				&:hover {
					color: var(--h-color-primary);
					box-shadow: 0 0 0 1px var(--h-color-primary-light-3);
				}
			`
		}

		const basicStyle = map[type]

		const disabledStyle = () =>
			disabled
				? styled(basicStyle)`
						color: var(--h-color-blank);
						background-color: var(--h-disabled-bg-color);
						box-shadow: 0 0 0 1px var(--h-disabled-border-color);

						cursor: not-allowed;

						&:hover {
							color: var(--h-color-blank);
							background-color: var(--h-disabled-bg-color);
							box-shadow: 0 0 0 1px var(--h-disabled-border-color);
							border-color: var(--h-disabled-border-color);
						}
					`
				: basicStyle
		const style = disabledStyle()
		return style
	}

	return {
		StyledButton: getButtonStyle()
	}
}

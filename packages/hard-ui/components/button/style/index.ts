import '@hard-ui/theme-chalk/src/base.scss'
// import '@hard-ui/theme-chalk/src/button-group.scss'
// import '@hard-ui/theme-chalk/src/button.scss'
import './index.scss'

import styled, { css } from 'styled-components'
import { Buttontype } from '../ButtonHelpers'

export const useStyle = (type: Buttontype, disabled: boolean, circle: boolean) => {
	const commonStyle = css`
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

		span {
			display: inline-flex;
			justify-content: center;
			align-items: center;
		}

		.h-icon + span {
			margin-left: 6px;
		}

		${circle &&
		css`
			border-radius: 50%;
			width: var(--h-button-size);
		`}
	`

	const getButtonStyle = () => {
		const map = {
			primary: css`
				color: var(--h-color-white);
				background-color: var(--h-color-primary);
				box-shadow: 0 0 0 1px var(--h-color-primary-light-3);

				&:hover {
					background-color: var(--h-color-primary-light-3);
					color: var(--h-color-white);
				}

				${disabled &&
				css`
					color: var(--h-disabled-text-color);
					background-color: var(--h-disabled-bg-color);
					border-color: var(--h-disabled-border-color);
					box-shadow: 0 0 0 1px var(--h-disabled-border-color);

					cursor: not-allowed;

					&:hover {
						color: var(--h-disabled-text-color);
						background-color: var(--h-disabled-bg-color);
						box-shadow: 0 0 0 1px var(--h-disabled-border-color);
						border-color: var(--h-disabled-border-color);
					}
				`}
			`,
			default: css`
				color: var(--h-color-blank);
				background-color: var(--h-color-white);
				box-shadow: 0 0 0 1px #d9d9d9;

				&:hover {
					color: var(--h-color-primary);
					box-shadow: 0 0 0 1px var(--h-color-primary-light-3);
				}

				${disabled &&
				css`
					color: var(--h-disabled-text-color);
					background-color: var(--h-disabled-bg-color);
					box-shadow: 0 0 0 1px var(--h-disabled-border-color);

					cursor: not-allowed;

					&:hover {
						color: var(--h-disabled-text-color);
						background-color: var(--h-disabled-bg-color);
						box-shadow: 0 0 0 1px var(--h-disabled-border-color);
					}
				`}
			`,
			dashed: css`
				color: var(--h-color-blank);
				background-color: var(--h-color-white);
				border-style: dashed;
				border-width: 1px;

				&:hover {
					color: var(--h-color-primary);
					border-color: var(--h-color-primary);
				}

				${disabled &&
				css`
					color: var(--h-disabled-text-color);
					background-color: var(--h-disabled-bg-color);
					border-color: var(--h-text-color-disabled);

					cursor: not-allowed;

					&:hover {
						color: var(--h-disabled-text-color);
						background-color: var(--h-disabled-bg-color);
						border-color: var(--h-text-color-disabled);
					}
				`}
			`,
			text: css`
				color: var(--h-color-blank);
				background-color: transparent;

				&:hover {
					color: var(--h-color-primary);
					box-shadow: 0 0 0 1px var(--h-color-primary-light-3);
				}

				${disabled &&
				css`
					color: var(--h-disabled-text-color);
					cursor: not-allowed;

					&:hover {
						background-color: transparent;
						color: var(--h-disabled-text-color);
						box-shadow: none;
					}
				`}
			`
		}

		const StyledButton = styled.button`
			${commonStyle}
			${map[type]}
		`

		return StyledButton
	}

	return {
		StyledButton: getButtonStyle()
	}
}

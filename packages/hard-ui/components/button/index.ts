import InternalButton from './Button'
import ButtonGroup from './ButtonGroup'

export type { ButtonProps } from './Button'
export type { ButtonGroupProps } from './ButtonGroup'
export type { ButtonHTMLType, ButtonSizeType, Buttontype } from './ButtonHelpers'

type CompoundedComponent = typeof InternalButton & {
	Group: typeof ButtonGroup
}

const Button = InternalButton as CompoundedComponent

Button.Group = ButtonGroup

export default Button

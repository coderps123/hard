import InternalInput from './Input'
import Password from './Password'
import TextArea from './TextArea'

export type { InputProps } from './Input'
export type { PasswordProps } from './Password'
export type { TextAreaProps } from './TextArea'

type CompoundedComponent = typeof InternalInput & {
	Password: typeof Password
	TextArea: typeof TextArea
}

const Input = InternalInput as CompoundedComponent

Input.Password = Password
Input.TextArea = TextArea

export default Input

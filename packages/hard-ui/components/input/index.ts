import InternalInput from './Input'
import Password from './Password'

export type { InputProps } from './Input'
export type { PasswordProps } from './Password'

type CompoundedComponent = typeof InternalInput & {
	Password: typeof Password
}

const Input = InternalInput as CompoundedComponent

Input.Password = Password

export default Input

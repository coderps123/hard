import InternalRadio from './Radio'
import RadioGroup from './RadioGroup'

export type { RadioProps } from './Radio'
export type { RadioGroupProps } from './RadioGroup'

type CompoundedComponent = typeof InternalRadio & {
	Group: typeof RadioGroup
}

const Radio = InternalRadio as CompoundedComponent
Radio.Group = RadioGroup

export default Radio

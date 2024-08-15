const ButtonTypes = ['primary', 'default', 'dashed', 'text'] as const
export type Buttontype = (typeof ButtonTypes)[number]

const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number]

const ButtonSizeTypes = ['large', 'default', 'small'] as const
export type ButtonSizeType = (typeof ButtonSizeTypes)[number]

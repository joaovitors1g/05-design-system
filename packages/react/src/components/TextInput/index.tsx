import { ComponentProps, ElementRef, forwardRef } from 'react'

import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = {
  prefix?: string
} & ComponentProps<typeof Input>

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} ref={ref} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

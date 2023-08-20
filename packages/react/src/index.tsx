import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  backgroundColor: '$ignite300',
  border: 'none',
  fontWeight: '$bold',
  borderRadius: '$sm',
  fontFamily: '$default',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>

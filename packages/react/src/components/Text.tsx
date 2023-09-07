import { ComponentProps } from 'react'

import { WithAs } from '..'

import { styled } from '../../styles'
import { fontSizesAsVariants } from '../utils/fontSizesAsVariants'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: fontSizesAsVariants,
  },

  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = ComponentProps<typeof Text> & WithAs

Text.displayName = 'Text'

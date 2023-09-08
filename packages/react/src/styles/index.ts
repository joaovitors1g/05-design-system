import { createStitches, defaultThemeMap } from '@stitches/react'
import * as tokens from '@joaovitors1g-ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: tokens.colors,
    space: tokens.space,
    fonts: tokens.fonts,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    lineHeights: tokens.lineHeights,
    radii: tokens.radii,
  },
})

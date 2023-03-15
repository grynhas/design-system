import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, space, radii } from '../tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
    maxWidth: 'space',
    minWidth: 'space',
    maxHeight: 'space',
    minHeight: 'space'
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    space,
    radii
  }
})

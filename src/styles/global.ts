import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0
  },
  'html, body': {
    height: '100%',
    width: '100%'
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '$regular'
  }
})

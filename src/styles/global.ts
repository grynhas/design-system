import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0
  },
  'html, body': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '$regular'
  }
})

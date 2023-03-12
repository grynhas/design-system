import { type ComponentProps, type ElementType } from 'react'
import { styled } from '../styles'

export const TextInput = styled('input', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $magenta',
  display: 'flex',
  alignItems: 'baseline',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$darkHigh',
  fontWeight: 'regular',
  background: 'transparent',
  width: '100%',

  '&:focus': {
    outline: 0
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  '&:placeholder': {
    color: '$darkLow'
  }
})

export interface TextInputProps extends ComponentProps<typeof TextInput> {
  as?: ElementType
}

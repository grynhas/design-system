import { type ComponentProps, type ElementType } from 'react'
import { styled } from '../styles'

export const TextInput = styled('input', {
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $darkHigh',
  display: 'flex',
  alignItems: 'baseline',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$darkHigh',
  fontWeight: 'regular',
  background: 'transparent',
  width: '100%',

  variants: {
    variant: {
      error: {
        borderColor: '#ff0000'
      }
    }
  },

  '&:focus': {
    borderColor: '$blue',
    boxShadow: '0 0 0 4px $blue 20%'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5
  },

  '&:placeholder': {
    color: '$darkLow',
    opacity: 0.5
  }
})

export interface TextInputProps extends ComponentProps<typeof TextInput> {
  as?: ElementType
}

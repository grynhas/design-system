import { type ComponentProps, type ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $darkHigh',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$darkHigh',
  fontWeight: 'regular',
  background: 'transparent',
  width: '100%',
  minHeight: '80px',

  '&:focus': {
    borderColor: '$blue',
    boxShadow: '0 0 0 4px $blue 20%'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5
  },

  '&::placeholder': {
    color: '$darkLow',
    opacity: 0.5
  }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}

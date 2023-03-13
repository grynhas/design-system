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

  '&:focus': {
    borderColor: '$blue',
    boxShadow: '0 0 0 4px $blue 20%'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5 // reduz a opacidade quando o input está desabilitado
  },

  '&:placeholder': {
    color: '$darkLow',
    opacity: 0.5 // reduz a opacidade do placeholder para torná-lo menos proeminente
  }
})

export interface TextInputProps extends ComponentProps<typeof TextInput> {
  as?: ElementType
}

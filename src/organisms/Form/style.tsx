import { type ElementType, type ComponentProps } from 'react'
import { styled } from '../../styles'

export const FormStyles = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  width: '100%',
  maxWidth: '$80',
  margin: '0 auto',
  padding: '$2',
  backgroundColor: '$lightHigh',
  alignItems: 'center',
  justifyContent: 'center'
})

export interface FormProps extends ComponentProps<typeof FormStyles> {
  as?: ElementType
}

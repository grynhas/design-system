import { type ElementType, type ComponentProps } from 'react'
import { styled } from '../styles'

export const ContainerBox = styled('div', {
  height: '90vh',
  widows: '100vw',
  padding: '$4',
  margin: '$4',
  border: '2px solid $darkHigh',
  borderRadius: '$md',
  boxSizing: 'border-box',
  overflow: 'hidden'
})

export interface ContainerBoxPros extends ComponentProps<typeof ContainerBox> {
  as?: ElementType
}

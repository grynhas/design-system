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
  // overflow: 'hidden',
  variants: {
    variant: {
      center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      top: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      bottom: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }
    }
  }
})

export interface ContainerBoxPros extends ComponentProps<typeof ContainerBox> {
  as?: ElementType
}

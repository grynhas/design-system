import { type ElementType, type ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$2',
  backgroundColor: '$darkHigh',
  color: '$lightSolid',
  boxShadow: '0 0 0 1px $darkLow'
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

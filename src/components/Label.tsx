import { type ComponentProps, type ElementType } from 'react'
import { styled } from '../styles'

export const Label = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  variants: {
    variant: {
      full: {
        width: '100%'
      },
      half: {
        width: '50%'
      },
      third: {
        width: '33%'
      },
      md: {
        width: '$80'
      }
    }
  }

})

export interface LabelProps extends ComponentProps<typeof Label> {
  as?: ElementType
}

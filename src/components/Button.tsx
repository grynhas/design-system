import { type ComponentProps, type ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  variants: {
    variant: {
      primary: {
        color: '$lightSolid',
        background: '$magenta',

        '&:not(:disabled):hover': {
          background: '$darkMedium'
        },

        '&:disabled': {
          backgroundColor: '$darkMedium'
        }
      },

      secondary: {
        color: '$darkLow',
        border: '2px solid $magenta',

        '&:not(:disabled):hover': {
          background: '$magenta',
          color: '$lightSolid'
        },

        '&:disabled': {
          color: '$darkLow',
          borderColor: '$darkLow'
        }
      },

      tertiary: {
        color: '$darkLow',

        '&:not(:disabled):hover': {
          color: '$darkMedium'
        },

        '&:disabled': {
          color: '$darkLow'
        }
      }
    },

    size: {
      sm: {
        height: 38
      },

      md: {
        height: 46
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

import { type ComponentProps, type ElementType } from 'react'
import { styled } from '../../styles'

export const ModalWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '$darkMedium',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.3s ease, visibility 0s ease 0.3s',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        visibility: 'visible',
        transition: 'opacity 0.3s ease'
      }
    }
  }
})

export const ModalStyled = styled('div', {
  position: 'fixed',
  top: 15,
  width: '100%',
  maxWidth: 500,
  height: '50%',
  maxHeight: 350,
  backgroundColor: '#000000e2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$sm',
  border: '3px solid $darkHigh',
  variants: {
    variant: {
      error: {
        backgroundColor: '#e63889ba',
        border: '3px solid $magenta'
      },
      success: {
        backgroundColor: '#0b64e0cf',
        border: '3px solid $blue'
      }
    }
  }
})

export const ModalContent = styled('div', {
  padding: '$2',
  borderRadius: '$1',
  maxWidth: '80%',
  maxHeight: '80%',
  overflowY: 'auto',
  color: '$darkMedium',
  fontWeight: 'bold',
  variants: {
    variant: {
      error: {
        color: '$lightSolid',
        fontSize: '$2xl'
      },
      success: {
        color: '$lightSolid',
        fontSize: '$2xl'
      }
    }
  }
})

export const ModalClose = styled('button', {
  position: 'absolute',
  top: '$2',
  right: '$2',
  fontSize: '$lg',
  fontWeight: 'bold',
  background: 'none',
  cursor: 'pointer',
  padding: '$1',
  border: '1px solid $darkHigh',
  borderRadius: '$1',
  backgroundColor: '$lightHigh'
})

export interface ModalWrapperProps extends ComponentProps<typeof ModalWrapper> {
  as?: ElementType
}

export interface ModalStyledPros extends ComponentProps<typeof ModalStyled> {
  as?: ElementType
}

export interface ModalContentProps extends ComponentProps<typeof ModalContent> {
  as?: ElementType
}

export interface ModalCloseProps extends ComponentProps<typeof ModalClose> {
  as?: ElementType
}

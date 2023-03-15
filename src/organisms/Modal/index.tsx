import React, { type FC, useEffect, useRef } from 'react'
import { ModalStyled, ModalContent, ModalClose } from './modalStaled'

interface ModalProps {
  isOpen: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  variantStyled?: boolean
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, variantStyled, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
      return () => { document.body.classList.remove('modal-open') }
    }
    return undefined
  }, [isOpen])

  const handleOutsideClick = () => {
    onClose(false)
  }
  const modalType = () => {
    return (variantStyled ?? false) ? 'success' : 'error'
  }

  return (
    <ModalStyled variant={modalType()} ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="modal-fallback">
        <ModalContent variant={modalType()}>
            <ModalClose onClick={handleOutsideClick} aria-label="Close modal">
            X
            </ModalClose>
            {children}
        </ModalContent>
    </ModalStyled>
  )
}

export default Modal

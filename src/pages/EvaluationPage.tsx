import { useState } from 'react'
import { ContainerBox, Heading, Loading } from '../components'
import Form from 'organisms/Form'
import { styled } from '../styles'
import logo from '../img/logo.png'
import Modal from 'organisms/Modal'

const LogoBox = styled('div', {
  width: '128px',
  height: '60px',
  img: {
    width: '100%',
    height: '100%'
  }
})

export const EvaluationPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [modalType, setModalType] = useState<boolean>(false)
  const [mensagem, setMensagem] = useState<string>('')

  return (
    <ContainerBox variant={'center'} >
        {(modal) ? <Modal variantStyled={modalType} isOpen={modal} onClose={setModal}>{mensagem}</Modal> : null}
        <LogoBox >
          <img src={logo} alt="logo serasa" />
        </LogoBox >
        <Heading css={{ textAlign: 'center' }} >Conte o quanto você está satisfeito com nossos serviços</Heading >
      <Form setLoading={setLoading} setModal={setModal} setModalType={setModalType} setMensagem={setMensagem} />
      {(loading) ? <Loading /> : null}

    </ContainerBox>
  )
}

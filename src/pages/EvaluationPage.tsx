import { ContainerBox } from '../components'
import Form from 'organisms/Form/Form'
import { styled } from '../styles'
import logo from '../img/logo.png'

const LogoBox = styled('div', {
  width: '128px',
  height: '60px',
  img: {
    width: '100%',
    height: '100%'
  }
})

export const EvaluationPage = () => {
  return (
        <ContainerBox variant={'center'} >
            <LogoBox >
              <img src={logo} alt="logo serasa" />
            </LogoBox >
          <Form />
        </ContainerBox>
  )
}

import { styled } from '../styles'
import { Heading } from './Heading'

const LoadingWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)' // meio transparente
})

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Heading variant={'loading'} >Aguarde, estamos processando...</Heading>
    </LoadingWrapper>
  )
}

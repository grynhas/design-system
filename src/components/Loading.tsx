// import '../styles/Loading.css'

// export const Loading = () => {
//   return (
//     <div className="loading">
//       <div className="loading__spinner"></div>
//     </div>
//   )
// }
import { styled } from '../styles'
import { Text } from './Text'

const LoadingWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)' // meio transparente
})

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Text >Aguarde, estamos processando...</Text>
    </LoadingWrapper>
  )
}

import { globalStyles } from './styles/global'
// import { styled } from './styles'
import Form from 'pages/Form'
import { ContainerBox } from './components'

// const Button = styled('button', {
//   backgroundColor: '$darkHigh'
// })

function App () {
  globalStyles()
  return (
    <ContainerBox>
      <Form />
    </ContainerBox>
  )
}

export default App

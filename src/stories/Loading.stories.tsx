import { type Meta } from '@storybook/react'
import { Loading } from '../components'

export default {
  component: Loading,
  title: 'Components/Loading'
} as Meta

export const Basic = (args: any) => <Loading />

Basic.args = {
  isLoading: true,
  message: 'Loading...'
}

Basic.parameters = {
  docs: {
    description: {
      component: 'Component that displays a loading indicator over the entire screen.'
    }
  }
}

import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, type BoxProps } from '../components'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
        <>
            <Text>Box</Text>
            <Text>Esse é o componente Box</Text>
        </>
    )
  }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    css: {
      backgroundColor: '$darkHigh',
      color: '$lightHigh'
    }
  }
}

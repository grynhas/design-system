/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, type TextInputProps } from '../components'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

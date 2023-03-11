import type { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '../components'
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'aqui tem texto'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}

import Rating from '../organisms/Rating'
import type { Meta, Story } from '@storybook/react'

import { type RatingProps } from '../components'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    rating: {
      type: { name: 'number', required: true },
      description: 'Current rating value (required)',
      defaultValue: 0,
      control: { type: 'range', min: 0, max: 5, step: 1 }
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'Whether the rating can be changed or not',
      defaultValue: false,
      control: { type: 'boolean' }
    },
    onChange: {
      type: { name: 'function', required: false },
      description: 'Function to be called when the rating is changed',
      defaultValue: () => {},
      table: {
        type: {
          summary: '(value: number) => void',
          detail: '(value: number) => void'
        },
        defaultValue: { summary: '() => {}' }
      }
    }
  }
} as Meta

const Template: Story<RatingProps> = (args) => <Rating {...args} />

export const Default = Template.bind({})
Default.args = {
  numberStars: 5
}

import { type Meta, type Story } from '@storybook/react'
import ButtonStar, { type ButtonStarProps } from '../components/ButtonStar'

export default {
  title: 'Components/ButtonStar',
  component: ButtonStar,
  argTypes: {
    onChange: { action: 'onChange' },
    iterator: { control: 'number' },
    rating: { control: 'number' }
  }
} as Meta

const Template: Story<ButtonStarProps> = (args) => <ButtonStar {...args} />

export const Example = Template.bind({})
Example.args = {
  onChange: () => { console.log('Rating changed') },
  index: 0,
  rating: 3
}

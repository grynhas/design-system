import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '../components'
import { FaBeer } from 'react-icons/fa'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send'
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <FaBeer />
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}

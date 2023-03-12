import type { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '../components'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'aqui tem texto'
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}

export const Size: StoryObj<TextProps> = {
  args: {
    children: 'Tamanho da fonte',
    size: 'xl'
  }
}

export const Color: StoryObj<TextProps> = {
  args: {
    children: 'Cor da fonte',
    css: {
      color: '$magenta'
    }
  }
}

export const LineHeight: StoryObj<TextProps> = {
  args: {
    children: 'Altura da linha',
    css: {
      lineHeight: '$lg'
    }
  }
}

export const Margin: StoryObj<TextProps> = {
  args: {
    children: 'Margem',
    css: {
      margin: '$4'
    }
  }
}

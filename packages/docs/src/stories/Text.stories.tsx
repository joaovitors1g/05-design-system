import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@joaovitors1g-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, est! Sunt, magni pariatur sit molestias eos architecto consequuntur rerum, mollitia facere corporis maxime provident quisquam nemo minima quos maiores veniam.',
  },
  argTypes: {
    size: {
      options: [
        '2xs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<TextProps>

type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

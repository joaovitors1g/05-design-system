import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, est! Sunt, magni pariatur sit molestias eos architecto consequuntur rerum, mollitia facere corporis maxime provident quisquam nemo minima quos maiores veniam.',
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

import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@joaovitors1g-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  tags: ['autodocs'],
  component: Heading,
  args: {
    children: 'Custom title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'select' },
    },
  },
} as Meta<HeadingProps>

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}

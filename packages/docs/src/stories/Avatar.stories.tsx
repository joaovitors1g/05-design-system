import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@joaovitors1g-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/joaovitors1g.png',
    alt: 'João Vitor',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

type Story = StoryObj<AvatarProps>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}

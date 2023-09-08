import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@joaovitors1g-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  parameters: {
    controls: { exclude: ['children'] },
  },
} as Meta<BoxProps>

type Story = StoryObj<BoxProps>

export const Primary: Story = {}

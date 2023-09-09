import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@joaovitors1g-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    content: '21 de Outubro - Indisponível',
    children: <Button variant="primary">Hover me</Button>,
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
} as Meta<TooltipProps>

type Story = StoryObj<TooltipProps>

export const Primary: Story = {}

import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
          }}
        >
          <Story />
          <Text size="sm">Accept terms and conditions</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

type Story = StoryObj<CheckboxProps>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

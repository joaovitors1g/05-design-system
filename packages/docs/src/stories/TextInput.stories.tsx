import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text size="sm">Email Address</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'github.com/',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

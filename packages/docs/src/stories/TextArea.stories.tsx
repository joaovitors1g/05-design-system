import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@joaovitors1g-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
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
          <Text size="sm">Description</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Cool description here',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

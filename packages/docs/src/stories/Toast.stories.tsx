import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, Toast, ToastProps } from '@joaovitors1g-ignite-ui/react'

function ToastWrapper(props: ToastProps) {
  const [shown, setShown] = useState(false)
  return (
    <>
      <Button onClick={() => setShown(true)}>Show toast</Button>
      <Toast
        open={shown}
        onOpenChange={(isOpen) => {
          action('onOpenChange')(isOpen)
          setShown(isOpen)
        }}
        {...props}
      />
    </>
  )
}

export default {
  title: 'Data Display/Toast',
  component: ToastWrapper,
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    duration: 5000,
  },
} as Meta<ToastProps>

type Story = StoryObj<ToastProps>

export const Primary: Story = {}

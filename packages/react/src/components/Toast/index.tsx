import { ComponentProps } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

export type ToastProps = ComponentProps<typeof RadixToast.Root> & {
  description: string
  title: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <RadixToast.Provider>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastContainer>
      <ToastViewport />
    </RadixToast.Provider>
  )
}

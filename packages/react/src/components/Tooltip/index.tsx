import { ComponentProps, ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'

import { TooltipArrow, TooltipContent } from './styles'

export type TooltipProps = ComponentProps<typeof RadixTooltip.Root> & {
  content: string
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...props}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

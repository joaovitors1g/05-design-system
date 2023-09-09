import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  padding: '$3 $4',
  borderRadius: '$xs',
  gap: '$2',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  width: '$4',
  height: '$2',
})

import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  fontFamily: '$default',
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  gap: '$1',
  border: '1px solid $gray600',
  position: 'relative',

  '&[data-state=open]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastViewport = styled(Toast.Viewport, {
  width: 360,
  position: 'fixed',
  bottom: 0,
  maxWidth: '100%',
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  zIndex: 2147483647,
  outline: 'none',
  margin: 0,
  listStyle: 'none',
  gap: '$4',
})

export const ToastClose = styled(Toast.Close, {
  background: 'none',
  color: '$gray200',
  border: 'none',
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
})

import { ToastPosition } from 'react-toastify'

export interface ToastOptions {
  position?: ToastPosition
  autoClose?: number
  hideProgressBar?: boolean
  closeOnClick?: boolean
  draggable?: boolean
  pauseOnHover?: boolean
  closeButton?: boolean
}

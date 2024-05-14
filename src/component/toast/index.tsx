import { toast } from 'react-toastify'
import { ToastOptions } from '@/types/toast'
import 'react-toastify/dist/ReactToastify.css'

import { ReactNode } from 'react'

const defaultToastOption: ToastOptions = {
  position: 'top-center',
  autoClose: 4000,
  hideProgressBar: false, // ProgressBar 숨김
  closeOnClick: false, // 클릭 시, toast 닫힘
  draggable: true,
  pauseOnHover: false, // hover 시, 시간 멈춤
  closeButton: true,
}

/**
 * @description
 */

const CustomToast = {
  info: (message: ReactNode, icon?: JSX.Element, options?: ToastOptions) => {
    toast.info(message, { ...defaultToastOption, icon: icon, ...options })
  },
  success: (message: ReactNode, icon?: JSX.Element, options?: ToastOptions) => {
    toast.success(message, { ...defaultToastOption, icon: icon, ...options })
  },
  error: (message: ReactNode, icon?: JSX.Element, options?: ToastOptions) => {
    toast.error(message, { ...defaultToastOption, icon: icon, ...options })
  },
}

export default CustomToast

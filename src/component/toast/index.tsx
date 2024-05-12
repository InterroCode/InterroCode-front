import { toast, ToastContainer } from 'react-toastify'
import { ToastOptions } from '@/model/toast'
import 'react-toastify/dist/ReactToastify.css'

import { ReactNode } from 'react'

import styled from '@emotion/styled'
import { Colors } from '@/styles'

// App.tsx (root에 선언해두고 씀)
export const StyledToastConatiner = styled(ToastContainer)`
  .Toastify__progress-bar--info {
    background: ${Colors.Primary};
  }
  .Toastify__toast--info {
    border: 1px solid transparent;
    .Toastify__toast-icon {
      color: ${Colors.Primary};
    }
  }
  .Toastify__progress-bar--success {
    background: ${Colors.Confirmed};
  }
  .Toastify__toast--success {
    border: 1px solid ${Colors.Confirmed};
    .Toastify__toast-icon {
      color: ${Colors.Confirmed};
    }
  }
  .Toastify__progress-bar--error {
    background: ${Colors.Error};
  }
  .Toastify__toast--error {
    border: 1px solid ${Colors.Error};
    .Toastify__toast-icon {
      color: ${Colors.Error};
    }
  }
`

const defaultToastOption: ToastOptions = {
  position: 'top-center',
  autoClose: 4000,
  hideProgressBar: false, // ProgressBar 숨김
  closeOnClick: false, // 클릭 시, toast 닫힘
  draggable: true,
  pauseOnHover: false, // hover 시, 시간 멈춤
  closeButton: true,
}

export const CustomToast = {
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

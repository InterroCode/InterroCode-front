import { ToastContainer } from 'react-toastify'
import styled from '@emotion/styled'
import { Colors } from '@/style/styles'

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

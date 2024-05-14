import { css } from '@emotion/css'
import { Colors } from '@/style/styles'

export const StepperStyles = {
  default: css`
    // 현재 step
    .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
      color: ${Colors.Secondary};
    }
    // 지나간 step
    .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
      color: ${Colors.Primary};
    }
  `,
}

export const ButtonColor = {
  default: css`
    .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
      color: ${Colors.Primary};
      &:hover {
        color: white;
        background-color: ${Colors.Secondary};
    }
  `,
}

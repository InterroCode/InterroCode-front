import { css } from '@emotion/css'
import { Colors } from '@/styles'

export const DropStyles = {
  default: css`
    //input border
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${Colors.Secondary};
      border-width: 2px;
    }
    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
      color: ${Colors.Secondary};
    }
  `,
}

export const DropSizes = {
  large: css`
    width: 256px;
  `,
  medium: css`
    width: 170px;
  `,
  small: css`
    width: 150px;
  `,
}

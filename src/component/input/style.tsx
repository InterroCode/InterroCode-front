import { css } from '@emotion/css'
import { Colors } from '@/styles'

export const InputStyles = {
  default: css`
    //input border
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${Colors.Secondary};
      border-width: 2px;
    }
    //label
    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
      color: ${Colors.Secondary};
    }
  `,
  error: css`
    // .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
    //   color: ${Colors.Error};
    // }
    // input border .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    //   border-color: ${Colors.Error};
    //   border-width: 28px;
    // }
    // label .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    //   color: ${Colors.Error};
    // }
    // .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
    //   border-color: ${Colors.Error};
    // }
  `,
}

export const InputSizes = {
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

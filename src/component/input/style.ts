import { css } from '@emotion/css'
import { Colors } from '@/style/styles'
export const InputStyles = {
  default: css`
    //input border
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${Colors.Secondary};
      border-width: 2px;
    }
    //fullWidth border
    .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${Colors.Secondary};
      border-width: 2px;
    }
    // multiline border
    .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${Colors.Secondary};
      border-width: 2px;
    }
    //label
    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
      color: ${Colors.Secondary};
    }
  `,
  error: css``,
}

export const InputWidth = {
  large: css`
    width: 256px;
  `,
  medium: css`
    width: 223px;
  `,
  small: css`
    width: 150px;
  `,
}

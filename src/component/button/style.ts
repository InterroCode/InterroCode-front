import { css } from '@emotion/css'
import { Colors } from '@/styles'

export const ButtonStyles = {
  default: css`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
  `,

  painted: css`
    border-radius: 10px;
    color: ${Colors.White};
    background-color: ${Colors.Primary};
  `,
  unpainted: css`
    border-radius: 10px;
    color: ${Colors.Primary};
    border: solid 2px ${Colors.Primary};
    background-color: ${Colors.White};
  `,
}

export const ButtonSizes = {
  large: css`
    width: 256px;
    height: 55px;
  `,
  medium: css`
    width: 90px;
    height: 40px;
  `,
  small: css`
    width: 51px;
    height: 32px;
  `,
}

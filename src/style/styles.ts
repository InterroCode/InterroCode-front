import { css } from '@emotion/css'

export const Colors = {
  Primary: '#7286D3',
  PrimaryOpacity: '#7286D3CC',
  Secondary: '#8EA7E9',
  Third: '#E5E0FF',
  Fourth: '#FFF2F2',

  Black: '#0a0a0a',
  Black40: '#404040',

  Gray20: '#f5f5f5',
  Gray30: '#ededed',
  Gray40: '#e0e0e0',
  Gray50: '#c2c2c2',
  Gray60: '#9e9e9e',
  Gray70: '#757575',
  Gray80: '#616161',
  Gray90: '#404040',
  White: '#FFFFFF',

  Beige: '#FDF6E8',
  Error: '#DA1E28',
  Confirmed: '#35D47D',
  Focus: '#6CD9B6',
  Link: '#466EEC',
}

/**
 * @description Image 경로 설정 축약
 */
export const Image = {
  // Logo: "/assets/client/yeonsei/bg/auth-intro-logo.webp",
}

export const globalStyle = {
  header1: css`
    font-size: 40px;
    line-height: 48px;
  `,
  header2: css`
    font-size: 32px;
    line-height: 40px;
  `,
  header3: css`
    font-size: 1.625rem;
    line-height: 32px;
  `,
  header4: css`
    font-size: 1.375rem;
    line-height: 24px;
  `,
  header5: css`
    font-size: 1.1rem;
    line-height: 20px;
  `,
  bodyPoint: css`
    font-size: 1.375rem;
    line-height: 28px;
  `,
  body1: css`
    font-size: 1.1rem;
    line-height: 24px;
  `,
  body2: css`
    font-size: 1rem;
    line-height: 20px;
  `,
  caption: css`
    font-size: 0.875rem;
    line-height: 16px;
  `,
}

import { cx } from '@emotion/css'
import { ButtonSizes, ButtonStyles } from '@/component/button/style.tsx'
import { CSSProperties } from 'react'

interface ButtonProps {
  style?: CSSProperties
  label?: string
  variant?: keyof typeof ButtonStyles
  size?: keyof typeof ButtonSizes
  onClick?: () => void
  img?: string
}

const Button = (props: ButtonProps) => {
  const { style, label, variant = 'painted', size = 'medium', onClick, img } = props

  return (
    <button
      className={cx(ButtonStyles['default'], ButtonStyles[variant], ButtonSizes[size])}
      onClick={onClick}
      style={style}>
      {img && <img src={img} alt={'img'} />}
      {label && label}
    </button>
  )
}

export default Button

import React from 'react'

import TextField, { TextFieldVariants } from '@mui/material/TextField'

import { InputStyles } from '@/component/input/style.tsx'
import { cx } from '@emotion/css'

interface InputProps {
  variant?: TextFieldVariants
  label: string
  size?: 'small' | 'medium' | undefined
  fullWidth?: boolean
  error?: boolean // 에러 여부를 나타내는 부울 타입
  required?: boolean // 필수 입력 여부를 나타내는 부울 타입
  multiline?: boolean // 여러 줄 입력 여부를 나타내는 부울 타입
  maxRows?: number // 엔터
  rows?: number // 펼쳐져 있음
  type?: string
}
const Input = (props: InputProps) => {
  //   const { variant, label, size, error,required,multiline } = props
  console.log(props)
  return (
    <div>
      <TextField {...props} className={props.error === true ? cx(InputStyles['error']) : cx(InputStyles['default'])} />
    </div>
  )
}

export default Input

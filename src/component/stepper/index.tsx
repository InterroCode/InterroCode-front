import { useState, useCallback } from 'react'
import React from 'react'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import StepperDropBox from '@/component/dropbox'
import { SelectChangeEvent } from '@mui/material/Select'

import { StepInfo, SelectFields } from '@/model/step'

import { StepperStyles, ButtonColor } from '@/component/stepper/style.tsx'
import { cx } from '@emotion/css'

interface StepperProps {
  // style?: CSSProperties
  stepsInfo: StepInfo[]
  selectFields: SelectFields
  selectNum: number[]
  isGroup: boolean[]
  setSelectFields: (newSelectFields: SelectFields) => void
  setHandleSelectFields: (name: string, value: string) => void
}

export default function HorizontalLinearStepper(props: StepperProps) {
  const [activeStep, setActiveStep] = useState(0)
  const { stepsInfo, selectFields, setSelectFields, setHandleSelectFields, selectNum, isGroup } = props

  const handleNext = () => {
    if (selectNum[activeStep] === 2) {
      const currentStepValue = selectFields[`main_${stepsInfo[activeStep].stepTitle}` as keyof SelectFields]
      if (currentStepValue === '') {
        // main만 필수 !
        alert(`main_${stepsInfo[activeStep].stepTitle}을 입력해 주세요.`)
        return
      }
    } else {
      const currentStepValue = selectFields[stepsInfo[activeStep].stepTitle as keyof SelectFields]
      if (currentStepValue === '') {
        // 선택된 값이 없으면 다음 스텝으로 진행하지 않고 함수를 종료
        alert(`${stepsInfo[activeStep].stepTitle}을 입력해 주세요.`)
        return
      }
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    const resetFields: SelectFields = { ...selectFields }
    for (const key in resetFields) {
      resetFields[key as keyof SelectFields] = ''
    }
    setSelectFields(resetFields)
  }

  const handleSelect = useCallback(
    (event: SelectChangeEvent<string>) => {
      const { value, name } = event.target
      setHandleSelectFields(name, value)
    },
    [selectFields],
  )

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {stepsInfo.map(steps => {
          const stepProps: { completed?: boolean } = {}

          return (
            <Step key={steps.step} {...stepProps}>
              <StepLabel className={cx(StepperStyles['default'])}>{steps.step}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === stepsInfo.length ? (
        // 마지막 step일 때
        <React.Fragment>
          <Typography sx={{ mt: 5, mb: 1, pl: 1 }}>
            All steps completed - you&apos;re finished
            {Object.entries(selectFields).map(([key, value]) => (
              <div key={key}>{value}</div>
            ))}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className={cx(ButtonColor['default'])}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleReset}>Submit</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 5, mb: 1, pl: 1 }}>
            <div>
              {activeStep + 1}. {stepsInfo[activeStep].label}
            </div>
            <div>
              <StepperDropBox
                handleSelect={handleSelect}
                stepTitle={stepsInfo[activeStep].stepTitle}
                fields={stepsInfo[activeStep].fields}
                selectFields={selectFields}
                selectNum={selectNum[activeStep]}
                isGroup={isGroup[activeStep]}
              />
            </div>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className={cx(ButtonColor['default'])}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>{activeStep === stepsInfo.length - 1 ? 'Finish' : 'Next'}</Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

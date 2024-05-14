import { useState, useCallback } from 'react'
import React from 'react'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import StepperDropBox from '@/component/dropbox'
import { SelectChangeEvent } from '@mui/material/Select'

import { StepInfo, SelectFields } from '@/types/step'

import CustomToast from '@/component/toast'
import InfoIcon from '@mui/icons-material/Info'
import { StepperStyles, ButtonColor } from '@/component/stepper/style.ts'
import { cx } from '@emotion/css'

interface StepperProps {
  // style?: CSSProperties
  stepsInfo: StepInfo[]
  selectFields: SelectFields
  selectNum: number[]
  isGroup: boolean[]
  groupName: string[]
  setSelectFields: (newSelectFields: SelectFields) => void
  setHandleSelectFields: (name: string, value: string) => void
}

export default function HorizontalLinearStepper(props: StepperProps) {
  const [activeStep, setActiveStep] = useState(0)
  const { stepsInfo, selectFields, setSelectFields, setHandleSelectFields, selectNum, isGroup, groupName } = props

  const handleNext = () => {
    if (selectNum[activeStep] === 2) {
      const currentStepValue = selectFields[`main_${stepsInfo[activeStep].stepTitle}` as keyof SelectFields]
      if (currentStepValue === '') {
        // main만 필수 !
        // alert(`main_${stepsInfo[activeStep].stepTitle}을 입력해 주세요.`)
        CustomToast.info(`main_${stepsInfo[activeStep].stepTitle}을 입력해 주세요.`, <InfoIcon />)
        return
      }
    } else {
      const currentStepValue = selectFields[stepsInfo[activeStep].stepTitle as keyof SelectFields]
      if (currentStepValue === '') {
        // 선택된 값이 없으면 다음 스텝으로 진행하지 않고 함수를 종료
        // alert(`${stepsInfo[activeStep].stepTitle}을 입력해 주세요.`)
        CustomToast.info(`${stepsInfo[activeStep].stepTitle}을 입력해 주세요.`, <InfoIcon />)
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
          <div>
            All steps completed - you&apos;re finished
            {Object.entries(selectFields).map(([key, value]) => (
              <div key={key}>{value}</div>
            ))}
          </div>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className={cx(ButtonColor['default'])}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleReset}>Submit</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <div>
                {activeStep + 1}. {stepsInfo[activeStep].label}
              </div>
              <StepperDropBox
                handleSelect={handleSelect}
                stepTitle={stepsInfo[activeStep].stepTitle}
                fields={stepsInfo[activeStep].fields}
                selectFields={selectFields}
                selectNum={selectNum[activeStep]}
                isGroup={isGroup[activeStep]}
                groupName={groupName}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {selectNum[activeStep] === 1 && (
                <>
                  {selectFields[stepsInfo[activeStep].stepTitle as keyof SelectFields] && (
                    <Chip label={`${selectFields[stepsInfo[activeStep].stepTitle as keyof SelectFields]}`} />
                  )}
                </>
              )}
              {selectNum[activeStep] === 2 && (
                <>
                  {selectFields[`main_${stepsInfo[activeStep].stepTitle}` as keyof SelectFields] && (
                    <Chip label={`${selectFields[`main_${stepsInfo[activeStep].stepTitle}` as keyof SelectFields]}`} />
                  )}
                  {selectFields[`sub_${stepsInfo[activeStep].stepTitle}` as keyof SelectFields] && (
                    <Chip
                      style={{ marginLeft: '10px' }}
                      label={`${selectFields[`sub_${stepsInfo[activeStep].stepTitle}` as keyof SelectFields]}`}
                    />
                  )}
                </>
              )}
            </div>
          </div>

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

import React from 'react'
import Input from '@/component/input'
import Button from '@/component/button'
import HorizontalLinearStepper from '@/component/stepper'
import { useStackStepperStore } from '@/stores/stackStepperStore'

const InputDev = () => {
  const { stepsInfo, selectFields, setSelectFields, setHandleSelectFields, selectNum, isGroup, groupName } =
    useStackStepperStore()
  return (
    <div>
      <div style={{ width: '700px', margin: '0 auto', marginBottom: '50px' }}>
        <HorizontalLinearStepper
          stepsInfo={stepsInfo}
          selectFields={selectFields}
          setSelectFields={setSelectFields}
          setHandleSelectFields={setHandleSelectFields}
          selectNum={selectNum}
          isGroup={isGroup}
          groupName={groupName}
        />
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Input label={'outlined small'} size={'small'} width={'small'} />
          <Button label={'small'} style={{ marginLeft: '10px' }} size={'small'} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Input label={'required'} required width={'small'} />
          <Button label={'Painted'} style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input label={'error'} error />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input label={'multiline maxRows defaultValue'} multiline maxRows={4} defaultValue={'defaultValue'} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input label={'multiline rows'} multiline rows={4} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input label={'password input test'} type={'password'} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Input label={'number input test'} type={'number'} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ width: '700px' }}>
            <Input fullWidth size={'small'} />
          </div>
          <Button label={'Painted'} style={{ marginLeft: '10px' }} />
        </div>
      </div>
    </div>
  )
}

export default InputDev

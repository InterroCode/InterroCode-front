import { css } from '@emotion/css'

// styles
import { DevContainer } from '@/pages/dev/styles'
import { Colors } from '@/style/styles.ts'

// components
import Button from '@/component/button'
import ButtonModal from '@/component/modal/buttonModal'
import LeftSideBar from '@/layouts/leftSideBar'
import { useStackStepperStore } from '@/stores/stackStepperStore'
import HorizontalLinearStepper from '@/component/stepper'
import CustomToast from '@/component/toast'
import Input from '@/component/input'

type ColorsType = typeof Colors
type ColorKeys = keyof ColorsType

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { stepsInfo, selectFields, setSelectFields, setHandleSelectFields, selectNum, isGroup, groupName } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useStackStepperStore()
  return (
    <DevContainer>
      <section>
        <div>
          <h1>Dev Page</h1>
          <p>This is a sample page for development purposes.</p>
          <h2>Fonts</h2>
          <p
            className={css`
              font-family: 'Gmarket Sans', sans-serif;
              font-weight: 300;
            `}>
            G Market Sans 지마켓 산스
          </p>
          <p
            className={css`
              font-family: 'Gmarket Sans', sans-serif;
              font-weight: 500;
            `}>
            G Market Sans 지마켓 산스
          </p>
          <p
            className={css`
              font-family: 'Gmarket Sans', sans-serif;
              font-weight: 700;
            `}>
            G Market Sans 지마켓 산스
          </p>
          <p
            className={css`
              font-family: 'Pretendard', sans-serif;
            `}>
            Pretendard
          </p>
          <p
            className={css`
              font-family: 'Pretendard', sans-serif;
              font-weight: bold;
            `}>
            Pretendard
          </p>
          <p
            className={css`
              font-family: 'Stretch Pro', sans-serif;
            `}>
            Strech Pro
          </p>
          <p
            className={css`
              font-family: 'Stretch Pro', sans-serif;
            `}>
            SStrech PPro
          </p>
          <h2>Colors</h2>
          {(Object.keys(Colors) as ColorKeys[]).map((color: ColorKeys) => {
            return (
              <div
                className={css`
                  display: flex;
                  color: ${Colors[color]};
                  font-size: 1rem;
                `}>
                {color}
              </div>
            )
          })}
        </div>
        <div>
          <Button label={'Painted'} style={{ marginBottom: '10px' }} />
          <Button label={'UnPainted'} variant={'unpainted'} style={{ marginBottom: '10px' }} />
          <Button label={'기본'} variant={'default'} style={{ marginBottom: '10px' }} />
          <Button label={'small'} style={{ marginBottom: '10px' }} size={'small'} />
          <Button label={'Large'} style={{ marginBottom: '10px' }} size={'large'} />
        </div>
        <div>
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
          <button onClick={() => CustomToast.info('안녕하세요. 반갑습니다 ~! ')}>info 토스트 알림 보이기</button>
          <button onClick={() => CustomToast.success('로그인 성공 !!~')}>success 토스트 알림 보이기</button>
          <button onClick={() => CustomToast.error('로그인 실패 ㅠㅠ')}>error 토스트 알림 보이기</button>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Input label={'outlined small'} size={'small'} width={'small'} />
            <Button label={'small'} style={{ marginLeft: '10px' }} size={'small'} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Input label={'required'} required />
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
              <Input fullWidth />
            </div>
            <Button label={'Painted'} style={{ marginLeft: '10px' }} />
          </div>
        </div>
      </section>
      <section>
        <div>
          <ButtonModal
            title={'Title'}
            content={'Content'}
            rightButtonText={'Right'}
            buttonTitle={'Open DialogWithButton'}
          />
        </div>
        <div>
          <LeftSideBar />
        </div>
      </section>
    </DevContainer>
  )
}

export default index

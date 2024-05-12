import { css } from '@emotion/css'

// styles
import { DevContainer } from '@/pages/dev/styles'
import { Colors } from '@/styles.tsx'

import Button from '@/component/button'
import HorizontalLinearStepper from '@/component/stepper'
import CustomToast from '@/component/toast'
import Input from '@/component/input'

import InfoIcon from '@mui/icons-material/Info'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'

import { useStackStepperStore } from '@/stores/stackStepperStore'

type ColorsType = typeof Colors
type ColorKeys = keyof ColorsType

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { stepsInfo, selectFields, setSelectFields, setHandleSelectFields, selectNum, isGroup } = useStackStepperStore()
  // const notify = () => CustomToast.info('성공 !~', {})
  return (
    <DevContainer>
      <section>
        <div>
          <h1>Dev Page</h1>
          <p>This is a sample page for development purposes.</p>
          <h2>Fonts</h2>
          <p
            className={css`
              font-family: 'GmarketSans', sans-serif;
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
          />
        </div>
        <div>
          <button onClick={() => CustomToast.info('안녕하세요. 반갑습니다 ~! ', <InfoIcon />)}>
            info 토스트 알림 보이기
          </button>
          <button onClick={() => CustomToast.success('로그인 성공 !!~', <DoneAllIcon />)}>
            success 토스트 알림 보이기
          </button>
          <button
            onClick={() => CustomToast.error('로그인 실패 ㅠㅠ', <WarningAmberIcon />, { hideProgressBar: true })}>
            error 토스트 알림 보이기
          </button>
        </div>
        <div>
          <Input variant="outlined" label="outlined small input test" size="small" />
          <Input variant="outlined" label="outlined required input test" required />
          <Input variant="outlined" label="outlined fullWidth input test" fullWidth />
          <Input variant="outlined" label="outlined error input test" error />
          <Input variant="outlined" label="outlined multiline input test" multiline maxRows={4} />
          <Input variant="standard" label="filled multiline input test" multiline rows={4} />
          <Input variant="standard" label="Standard multiline input test" type="password" />
          <Input variant="standard" label="Standard multiline input test" type="number" />
        </div>
      </section>
    </DevContainer>
  )
}

export default index

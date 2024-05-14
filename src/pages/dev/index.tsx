import { css } from '@emotion/css'

// styles
import { DevContainer } from '@/pages/dev/styles'
import { Colors } from '@/style/styles.ts'

// components
import Button from '@/component/button'
import ButtonModal from '@/component/modal/buttonModal'
import LeftSideBar from '@/layouts/leftSideBar'

type ColorsType = typeof Colors
type ColorKeys = keyof ColorsType

const index = () => {
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

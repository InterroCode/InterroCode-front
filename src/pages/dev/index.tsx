import { css } from '@emotion/css'

// styles
import { DevContainer } from '@/pages/dev/styles'
import { Colors } from '@/styles.tsx'

type ColorsType = typeof Colors
type ColorKeys = keyof ColorsType

const index = () => {
  return (
    <DevContainer>
      <section>
        <div>
          <h1>Dev Page</h1>
          <p>This is a sample page for development purposes.</p>
        </div>
      </section>
      <section>
        <div>
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
      </section>
    </DevContainer>
  )
}

export default index

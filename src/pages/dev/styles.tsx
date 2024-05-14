import styled from '@emotion/styled'
import { Colors } from '@/style/styles.ts'

export const DevContainer = styled.div`
  & > section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > div {
      background-color: white;
      padding: 20px;
      border: 1px solid ${Colors.Gray60};

      & > div,
      & > span {
        margin: 10px;
      }

      & > h4 {
        margin: 10px 0;
      }
    }

    & > .component_column {
      display: flex;
      flex-direction: column;
    }

    & > .component_row {
      margin: 0;
      flex-direction: row;
    }

    & .call-box {
      width: 400px;
      height: 300px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
`

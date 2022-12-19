
import styled from 'styled-components'
import { fncTransition, mediaQueryMinW, minWidthForAdjustMenu } from './theme/snippetsCSS'


export const Main = styled.main`
  // --
  // --
  ${fncTransition({})}
  // --
  display: flex;
  flex-direction: column;
  padding: 136px 8px 8px 8px;
  // --
  // --
  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    padding: 136px 8px 8px 280px;

  }
  // --
`

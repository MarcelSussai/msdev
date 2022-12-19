
import styled from 'styled-components'
import { animation_10, fncTransition, mediaQueryMinW, minWidthForAdjustMenu } from './theme/snippetsCSS'


export const Main = styled.main`
  // --
  // --
  ${fncTransition({})}
  // --
  display: flex;
  flex-direction: column;
  padding: 136px 0 0 8px;
  opacity: 0;
  animation: ${animation_10} 1s 1s ease-in-out forwards;
  // --
  // --
  ${mediaQueryMinW(minWidthForAdjustMenu)} {
    padding: 136px 0 0 280px;

  }
  // --
`

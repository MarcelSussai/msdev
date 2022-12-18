
import styled from 'styled-components'
import { fncTransition, mediaQueryMinW } from './theme/snippetsCSS'


export const Main = styled.main`
  // --
  // --
  ${fncTransition({})}
  // --
  display: flex;
  flex-direction: column;
  padding: 128px 8px 8px 8px;
  // --
  // --
  ${mediaQueryMinW('600')} {
    padding: 128px 8px 8px 280px;

  }
  // --
`

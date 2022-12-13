
import styled from 'styled-components'
import { fncTransition } from './theme/snippetsCSS'

interface MainProps {
  isMenuHidden?: boolean
}
export const Main = styled.main<MainProps>`
  ${fncTransition({duration: '.4s'})}
  display: flex;
  flex-direction: column;
  padding: 8px 8px 8px 8px;
`


import styled from 'styled-components'
import { fncTransition } from './theme/snippetsCSS'

interface MainProps {
  isMenuHidden?: boolean
}
export const Main = styled.main<MainProps>`
  ${fncTransition({dur: '.8s'})}
  display: flex;
  flex-direction: column;
  padding: 8px 8px 8px 288px;
  &.hide {
    ${fncTransition({dur: '.8s', dly: '.8s'})}
    padding: 8px 8px 8px 56px;

  }
`

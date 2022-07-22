
import styled from 'styled-components';


interface MainProps {
  isMenuHidden?: boolean
}
export const Main = styled.main<MainProps>`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 8px  288px;
`

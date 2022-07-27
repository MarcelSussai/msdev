import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { AppCtx } from "../../contexts/ctxGlobal";
import { colors } from "../../styles/theme";
import { fncTransition } from "../../styles/theme/snippetsCSS";
import Logotype from "../logo/logotype";
import Menu from "./components/menu";


const ContainerHeader = styled.header`
  ${fncTransition({dur: '.8s'})}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: fit-content;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 0 0 0;
  z-index: 200;
  color: ${colors.riverBed.x050};
  &.hide {
    ${fncTransition({dur: '.8s', dly: '.8s'})}
    left: -224px;
    overflow-y: hidden;
  }
  &::-webkit-scrollbar {
    width: 10px;
    opacity: .4;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-track-piece {
    background: ${colors.riverBed.x200};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.riverBed.x250};
    border-radius: 24px;
  }
`



const Header = (props: any) => {

  const {
    pageIndexActive
  } = props

  const context = useContext(AppCtx)
  const {isHide, setIsHide} = context

  const handleClickMenu = () => {
    let hidden = !isHide
    setIsHide(hidden)
    localStorage.setItem('isHide', (hidden).toString())
  }

  return (
  <ContainerHeader className={isHide ? 'hide' : ''}>
    <Logotype />
    <Menu
      onCloseCLick={handleClickMenu}
      pageIndexActive={pageIndexActive}
    />
  </ContainerHeader>
)

}

export default Header;